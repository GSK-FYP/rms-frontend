import React from "react";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import XYZ from "ol/source/XYZ.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import "../scenes/Map/mapCSS.css";
import { FullScreen, defaults as defaultControls } from "ol/control.js";


const layers=[]
layers.push(
  new TileLayer({
    visible: true,
    preload: Infinity,
    source: 
      new XYZ(),
  })
);

const map = new Map({
  controls: defaultControls().extend([new FullScreen()]),
  layers: layers,
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

function OpenMap() {
  return <div id="map" className="map"></div>;
}

export default OpenMap;
