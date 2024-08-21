import React, { useState, useEffect, useRef } from "react";
import AdminDashboardLayout from "../../components/templates/AdminDashboardLayout";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { useAuth } from "../../contexts/AuthContext";
import 'ol/ol.css';

interface ApiFeature {
  ogc_fid?: number;
  geom: any;
  [key: string]: any;
}

const AdminMapView: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [geoJsonUrl, setGeoJsonUrl] = useState<string | null>(null);
  const { token } = useAuth();
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [allFeatures, setAllFeatures] = useState<any[]>([]);


  const fetchDataAndSave = async (url: string) => {
    if (!token) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      const geoJsonData = transformToGeoJSON(data);
      console.log("Transformed GeoJSON data:", geoJsonData);

      setAllFeatures(geoJsonData.features);

      const blob = new Blob([JSON.stringify(geoJsonData)], { type: 'application/json' });
      const fileUrl = URL.createObjectURL(blob);
      setGeoJsonUrl(fileUrl);

      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching or saving data:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAndSave("http://0.0.0.0:9002/geometry/Oforikrom%20Municipal/mmdas");
  }, [token]);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && geoJsonUrl) {
      const vectorSource = new VectorSource({
        url: geoJsonUrl,
        format: new GeoJSON()
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      map.on('click', (event) => {
        map.forEachFeatureAtPixel(event.pixel, (feature) => {
          setSelectedFeature(feature);
          setIsDrawerOpen(true);
          return true;  // Stop after the first feature
        });
      });

      mapInstanceRef.current = map;

      vectorSource.once('featuresloadend', () => {
        const extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [50, 50, 50, 50], maxZoom: 18 });
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined);
        mapInstanceRef.current = null;
      }
      if (geoJsonUrl) {
        URL.revokeObjectURL(geoJsonUrl);
      }
    };
  }, [geoJsonUrl]);

  return (
    <AdminDashboardLayout>
      <div className="grid grid-cols-1 md:gap-6 2xl:gap-7.5">
        {isLoading && <div>Loading map data...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="mb-4 flex justify-center">
          <button onClick={() => fetchDataAndSave("http://0.0.0.0:9002/geometry/Oforikrom%20Municipal/mmdas")} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
            Load MMDAs
          </button>
          <button onClick={() => fetchDataAndSave("http://0.0.0.0:9002/geometry/Oforikrom%20Municipal/buildings")} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
            Load Buildings
          </button>
          <button onClick={() => fetchDataAndSave("http://0.0.0.0:9002/geometry/Oforikrom%20Municipal/businesses")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Load Businesses
          </button>
        </div>
        <div
          id="popup-container"
          className="ol-popup"
          style={{ zIndex: "999" }}
        >
          <div id="popup-content"></div>
        </div>
        <div ref={mapRef} id="map" className="map-container w-full h-[500px] lg:h-[800px] rounded-3xl"></div>
        
        {/* Drawer */}
        {isDrawerOpen && selectedFeature && (
          <div className="fixed z-99999 lg:mt-22 h-max inset-y-0 right-0 w-64 bg-white shadow-lg p-4 overflow-y-auto">
            <button onClick={() => setIsDrawerOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Feature Information</h2>
            {Object.entries(selectedFeature.getProperties()).map(([key, value]) => (
              key !== 'geometry' && (
                <p key={key} className="mb-2">
                  <strong>{key}:</strong> {String(value)}
                </p>
              )
            ))}
          </div>
        )}

        {/* Table */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">All Features Data</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  {allFeatures.length > 0 && Object.keys(allFeatures[0].properties).map((key) => (
                    <th key={key} className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr key={index}>
                    {Object.values(feature.properties).map((value: any, valueIndex) => (
                      <td key={valueIndex} className="px-4 py-2 border-b border-gray-200">
                        {String(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};
const transformToGeoJSON = (data: any): GeoJSON.FeatureCollection => {
    let features: GeoJSON.Feature[];

    if (Array.isArray(data)) {
      features = data.map(item => transformSingleFeature(item));
    } else if (data.type === 'FeatureCollection') {
      return data;
    } else if (data.type === 'Feature') {
      features = [data];
    } else {
      features = [transformSingleFeature(data)];
    }

    return {
      type: "FeatureCollection",
      features: features
    };
  };

  const transformSingleFeature = (item: ApiFeature): GeoJSON.Feature => {
    return {
      type: "Feature",
      geometry: item.geom,
      properties: Object.keys(item).reduce((acc, key) => {
        if (key !== 'geom') {
          acc[key] = item[key];
        }
        return acc;
      }, {} as { [key: string]: any })
    };
  };

export default AdminMapView;