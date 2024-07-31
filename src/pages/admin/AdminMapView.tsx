import React from "react";
import AdminDashboardLayout from "../../components/templates/AdminDashboardLayout";
import GeoJSON from "ol/format/GeoJSON";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import View from "ol/View";

new Map({
	target: "map-container",
	layers: [
		new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url: "",
			}),
		}),
	],
	view: new View({
		center: [0, 0],
		zoom: 2,
	}),
});

const AdminMapView: React.FC = () => {
	return (
		<AdminDashboardLayout>
			<div className="grid grid-cols-1 md:gap-6 2xl:gap-7.5">
				<div
					id="popup-container"
					className="ol-popup"
					style={{ zIndex: "999" }}
				>
					<a href="/" id="popup-closer" className="ol-popup-closer">
						X
					</a>
					<div id="popup-content"></div>
				</div>
				<div id="map-container" style={{ width: "100%", height: "100%" }}></div>
			</div>
		</AdminDashboardLayout>
	);
};

export default AdminMapView;
