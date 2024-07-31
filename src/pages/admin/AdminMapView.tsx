import React, { useEffect, useRef } from "react";
import AdminDashboardLayout from "../../components/templates/AdminDashboardLayout";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import 'ol/ol.css';

const AdminMapView: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const vectorSource = new VectorSource({
        format: new GeoJSON(),
        url: "http://0.0.0.0:9002/geometry/Oforikrom%20Municipal/buildings",
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

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined);
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="grid grid-cols-1 md:gap-6 2xl:gap-7.5">
        <div
          id="popup-container"
          className="ol-popup"
          style={{ zIndex: "999" }}
        >
          <a href="/admin/overview" id="popup-closer" className="ol-popup-closer">
            X
          </a>
          <div id="popup-content"></div>
        </div>
        <div ref={mapRef} id="map" className="map-container w-[100%] h-[500px] lg:h[800px]"></div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminMapView;
