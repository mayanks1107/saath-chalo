import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useEffect } from "react";
import './Routing.css'
//23.2584857,77.401989
//25.335649,83.007629
const createRoutineMachineLayer =  ({ FromDis,ToDis }) => {
  
  useEffect(() => {
    console.log(FromDis);
    console.log(ToDis);
}, [ToDis,ToDis])

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(FromDis),
      L.latLng(ToDis),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    // showAlternatives: false,
    hideInstructions:true, // Disable overall instructions
    showStepText: true,
    language: "en", // Force English instructions
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
