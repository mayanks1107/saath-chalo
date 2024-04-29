import React, { useEffect, useState } from 'react'
import { useMap, Marker, Popup } from 'react-leaflet'
import { CiLocationOn } from "react-icons/ci";
import { Icon } from "leaflet";
import marker from "./Vector4.svg";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [25, 25]
});

const MyLocation = ({ position }) => {

    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        if (position) {
            setCurrentPosition(position);
        }
    }, [position]);

    const map = useMap()
    if (currentPosition === null) return null;

    // map.flyTo(currentPosition, map.getZoom())
    map.flyTo(currentPosition, 13)

    return (
            <Marker position={currentPosition} icon={myIcon} >
            <Popup>Your Are is Here</Popup>
            <CiLocationOn >
            </CiLocationOn>
            </Marker>
    );
}

export default MyLocation