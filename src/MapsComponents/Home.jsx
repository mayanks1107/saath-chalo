import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { MdMyLocation } from 'react-icons/md';
import './style.css';
// styles
import "leaflet/dist/leaflet.css";

// components
import MyLocation from './MyLocation';
import RoutingMachine from './RoutingMach';
import { Icon } from "leaflet";
import marker from "./Vector4.svg";
import Rider from "./Rider.svg";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [25, 25]
});
const riderIcon = new Icon({
    iconUrl: Rider,
    iconSize: [25, 25]
    });

const MapHome = () => {
    
    const [currentPosition,setCurrentPosition]= useState([28.7041, 77.1025]);

    const [location, setLocation] = useState([28.6139, 77.2088]);
  
    
    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    
 
    // geoapify url for leaflet map
    const geoapifyUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=1e6279a5e36245b4a5fcbddcebab6a78`;

    // serach my location
    const handleSearch = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentPosition([position.coords.latitude, position.coords.longitude])
        })
    }
    const handleSearch2 = ()=>{
        // console.log(location);
        
        // console.log(location2);
        toggleOpen();
        
    }

    useEffect(() => {
        
        
    }, [location])
 useEffect(() => {
    handleSearch();
 }, [])
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div>
                <MapContainer center={location} zoom={5} className='map_dim'>
                    <TileLayer
                        attribution='&copy; Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
                        url={geoapifyUrl}
                        // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
            <MyLocation position={currentPosition}/>
            

            <Marker position={location} draggable={true} icon={riderIcon} >
                <Popup>Your cab driver is Here</Popup>
            </Marker>
            {basicModal ? <RoutingMachine FromDis={currentPosition} ToDis={location}/> : null}
            </MapContainer>

               
                <div className='h-full'>
                  
                    
                </div>
                <button onClick={handleSearch2} className='map_btn'>Check Cab Location</button>
            </div>
        </div>
    );
};

export default MapHome;
