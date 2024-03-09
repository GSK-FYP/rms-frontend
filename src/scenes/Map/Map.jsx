import React, {useEffect, useRef} from "react";
import "ol/ol.css";
import "./mapCSS.css";
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import Link from 'ol/interaction/Link';
import Select from "ol/interaction/Select";
import TileLayer from "ol/layer/Tile";
import {OSM, XYZ} from "ol/source";
import {Overlay} from "ol";
import {Control, defaults as defaultControls} from "ol/control";

let container = document.getElementById('popup-container');

const overlay = new Overlay({
    element: container,
    autoPan: false,
});

const buildings_source = new VectorLayer({
    // background: 'white',
    source: new VectorSource({
        format: new GeoJSON(),
        url: 'http://127.0.0.1:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abuildings&maxFeatures=1000000&outputFormat=application%2Fjson',
    }),
});

const businesses_source = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: 'http://127.0.0.1:8080/geoserver/rms/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rms%3Abusinesses&maxFeatures=1000000&outputFormat=application%2Fjson',
    }),
})

const google_roads_source = new TileLayer({
    source: new XYZ({
        url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
        // projection: "EPSG:32630"
    }),
});

const google_hybrid_source = new TileLayer({
    source: new XYZ({
        url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
        // projection: "EPSG:32630"
    }),
});

const openstreetmap_source = new TileLayer({
    source: new OSM()
});


class SelectLayerControl extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
        const options = opt_options || {};

        const outer_div = document.createElement('div');
        outer_div.classList.add("select-layer-control")
        outer_div.style.backgroundColor = "#3322ee"

        const basemap_div = document.createElement("div");

        const basemap_form = document.createElement("form");

        const basemap_fieldset = document.createElement("fieldset");
        const basemap_legend = document.createElement("legend");
        basemap_legend.innerText = "Basemap";


        const osm_div = document.createElement("div");
        const osm = document.createElement("input");
        osm.checked = true;
        osm.setAttribute("type", "radio");
        osm.setAttribute("id", "osm");
        osm.setAttribute("value", "osm");
        osm.setAttribute("name", "basemap");

        const osm_label = document.createElement("label");
        osm_label.setAttribute("for", "osm");
        osm_label.innerText = "OpenStreetMap";

        const google_roads_div = document.createElement("div");
        const google_roads = document.createElement("input");
        google_roads.setAttribute("type", "radio");
        google_roads.setAttribute("id", "roads");
        google_roads.setAttribute("value", "roads");
        google_roads.setAttribute("name", "basemap");

        const google_roads_label = document.createElement("label");
        google_roads_label.setAttribute("for", "roads");
        google_roads_label.innerText = "Google Roads";


        const google_hybrid_div = document.createElement("div");
        const google_hybrid = document.createElement("input");
        google_hybrid.setAttribute("type", "radio");
        google_hybrid.setAttribute("id", "hybrid");
        google_hybrid.setAttribute("value", "hybrid");
        google_hybrid.setAttribute("name", "basemap");

        const google_hybrid_label = document.createElement("label");
        google_hybrid_label.setAttribute("for", "hybrid");
        google_hybrid_label.innerText = "Google Hybrid";


        osm_div.appendChild(osm);
        osm_div.appendChild(osm_label);

        google_roads_div.appendChild(google_roads);
        google_roads_div.appendChild(google_roads_label);


        google_hybrid_div.appendChild(google_hybrid);
        google_hybrid_div.appendChild(google_hybrid_label);


        basemap_fieldset.appendChild(basemap_legend);
        basemap_fieldset.appendChild(osm_div);
        basemap_fieldset.appendChild(google_roads_div);
        basemap_fieldset.appendChild(google_hybrid_div);

        basemap_form.appendChild(basemap_fieldset);
        basemap_div.appendChild(basemap_form);


        const layer_div = document.createElement("div");
        const layer_fieldset = document.createElement("fieldset");
        const layer_legend = document.createElement("legend");
        layer_legend.innerText = "Layers";

        const buildings_div = document.createElement("div");
        const buildings_layer = document.createElement("input");
        buildings_layer.setAttribute("type", "checkbox");
        buildings_layer.checked = true;
        const buildings_label = document.createElement("label");
        buildings_label.setAttribute("for", "buildings");
        buildings_label.innerText = "Buildings";

        const businesses_div = document.createElement("div");
        const businesses_layer = document.createElement("input");
        businesses_layer.setAttribute("type", "checkbox");
        businesses_layer.checked = true;
        const businesses_label = document.createElement("label");
        businesses_label.setAttribute("for", "businesses");
        businesses_label.innerText = "Businesses";


        buildings_div.appendChild(buildings_layer);
        buildings_div.appendChild(buildings_label);
        businesses_div.appendChild(businesses_layer);
        businesses_div.appendChild(businesses_label);

        layer_fieldset.appendChild(layer_legend);
        layer_fieldset.appendChild(buildings_div);
        layer_fieldset.appendChild(businesses_div);

        layer_div.appendChild(layer_fieldset);


        outer_div.appendChild(basemap_div);
        outer_div.appendChild(layer_div);

        super({
            element: outer_div,
            target: options.target,
        });

        outer_div.addEventListener('click', this.handleRotateNorth.bind(this), false);
        basemap_form.addEventListener('change', this.handleChangeBasemap.bind(this, basemap_form), false);
        businesses_layer.addEventListener("change", this.handleToggleBusinessLayer.bind(this, businesses_layer), false);
        buildings_layer.addEventListener("change", this.handleToggleBuildingsLayer.bind(this, buildings_layer), false);
    }

    handleRotateNorth() {
        this.getMap().getView().setRotation(0);
    }

    handleToggleBusinessLayer(businesses_layer) {
        if (businesses_layer.checked) {
            this.getMap().getLayers().push(businesses_source);
        } else {
            this.getMap().removeLayer(businesses_source);
        }
    }

    handleToggleBuildingsLayer(buildings_layer) {
        if (buildings_layer.checked) {
            this.getMap().getLayers().push(buildings_source);
        } else {
            this.getMap().removeLayer(buildings_source);
        }
    }

    handleChangeBasemap(basemap_form) {
        console.log(this)
        console.log(Array.from(basemap_form.children).find(r => r.checked));
        const selected_basemap = basemap_form.querySelector("input:checked").value;
        const current_basemap = this.getMap().getLayers().removeAt(0);

        if (selected_basemap === "osm") {
            this.getMap().getLayers().insertAt(0, openstreetmap_source);
        } else if (selected_basemap === "roads") {
            this.getMap().getLayers().insertAt(0, google_roads_source);
        } else if (selected_basemap === "hybrid") {
            this.getMap().getLayers().insertAt(0, google_hybrid_source);
        }
    }
}


export const OpenLayers = () => {
    const ref = useRef(0);
    const mapRef = useRef(0);

    useEffect(() => {
        const map = new Map({
            target: 'map-container',
            controls: defaultControls().extend([new SelectLayerControl()]),
            layers: [
                openstreetmap_source,
                buildings_source,
                businesses_source,
            ],
            overlays: [overlay],
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
        });

        let selected = new Select();

        selected.on("select", async (event) => {

            event.preventDefault();
            event.stopPropagation();

            let feature = event.selected.at(0);

            if (typeof feature === "undefined") {
                return;
            }

            const container = document.getElementById('popup-container');
            const content = document.getElementById('popup-content');
            content.style = "display: flex; flex-direction: column; justify-content: space-between;";
            const closer = document.getElementById('popup-closer');
            closer.onclick = function () {
                overlay.setPosition(undefined);
                closer.blur();
                return false;
            };
            // container.innerText = "selected"
            console.log(event);
            const coordinates = event.mapBrowserEvent.coordinate;
            console.log(coordinates)

            // content.innerHTML = '<p>You clicked here:</p><code>' + '</code>';
            console.log(overlay)
            if (overlay) {
                overlay.setPosition(Array.from(coordinates));
            }

            console.log(feature);

            let [table, feature_id] = feature.id_.split(".")

            if (table === "buildings") {
                const BACKEND_ROOT_URL = "http://127.0.0.1:8000";
                const buildings = await fetch(`${BACKEND_ROOT_URL}/buildings/${feature_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const businesses = await fetch(`${BACKEND_ROOT_URL}/buildings/${feature_id}/businesses`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });


                if (buildings.ok && businesses.ok) {
                    const result = await buildings.json();
                    const businesses_result = await businesses.json();
                    console.log(result);
                    const buildings_data = `
                          <div style="color: blue">
                            <h2>Property</h2>
                            <div>ID: ${result.id} </div>
                            <div>Name: ${result.name} </div>
                            <div>Class: ${result.class} </div>
                            <div>Category: ${result.category} </div>
                            <div>Physical Address: ${result.physical_address}</div>
                            <div>Street Name: ${result.street_name}</div>
                            <div>Property Number: ${result.property_number}</div>
                            <div>Unique Parcel Number: ${result.unique_parcel_number} </div>
                            <div>Current Value: ${result.current_value} </div>
                            <div>Current Impost: ${result.current_impost} </div>
                            <div>Payment Amount Due: ${result.payment_amount_due} </div>
                            <div>Arrears: ${result.payment_amount_due} </div>
                            <div>Owner ID: ${result.owner_id}</div>
                          </div>
                          `;

                    const button = document.createElement("button");
                    button.setAttribute("id", result.id);
                    button.style = "padding: 10px; background: blue; color: white; border-color: blue; border-radius: 12px;";
                    button.innerText = "Edit Building Details";
                    button.addEventListener("click", async (event) => {
                        window.location.href = `/BuildingDetails/${event.target.id}`;

                    })

                    let businesses_data = "";

                    console.log(businesses_result.length)

                    if (businesses_result.length > 0) {
                        let s = "";
                        for (const business_data of businesses_result) {
                            s += `<li>${business_data.name} - ${business_data.id}</li>`
                        }
                        businesses_data = `
                          <div style="color: blue">
                            <h2>Businesses in the building</h2>
                            <ol>${s}</ol>
                          </div>
                          `;

                        console.log(businesses_data)
                    }
                    content.innerHTML = `${buildings_data}<hr/>${businesses_data}`;
                    content.appendChild(button);

                }

            } else if (table === `businesses`) {
                // let business_data = $("#businesses-data")
                const businesses = await fetch(`http://127.0.0.1:8000/businesses/${feature_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (businesses.ok) {
                    const result = await businesses.json();
                    const business_data = `
                          <div style="color: blue">
                            <h2>Business</h2>
                            <div>ID: ${result.id} </div>
                            <div>Name: ${result.name} </div>
                            <div>Class: ${result.class} </div>
                            <div>Tax Identification Number: ${result.tax_identification_number} </div>
                            <div>DA Assigned Number: ${result.da_assigned_number} </div>
                            <div>Establishment Year: ${result.establishment_year} </div>
                            <div>Owner ID: ${result.owner_id}</div>
                          </div>
                          `;

                    const button = document.createElement("button");
                    button.style = "padding: 10px; background: blue; color: white; border-color: blue; border-radius: 12px;";
                    button.setAttribute("id", result.id);
                    button.innerText = "Edit Business Details";
                    button.addEventListener("click", async (event) => {
                        window.location.href = `/BusinessDetails/${event.target.id}`;

                    })

                    content.innerHTML = business_data;
                    content.appendChild(button);
                }

            }

        });

        map.addInteraction(new Link());
        map.addInteraction(selected);
    }, []);

    return (
        <div style={{width: "100%", height: "100%"}}>
            <div id="popup-container" className="ol-popup" style={{zIndex: "999"}}>
                <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
            <div id="map-container" style={{width: "100%", height: "100%"}}></div>
        </div>
    );
}



