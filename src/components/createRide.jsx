import React from 'react'
import './createRide.css';

function createRide() {
    return (
        <div >
            <div>
                <input type="text" name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number'/>
            </div>
            <div>
                <input type="text" name="source" id="source" placeholder='Source' />
            </div>
            <div>
                <input type="text" name="destination" id="destination" placeholder='Destination' />
            </div>
            <div>
                <input type="check" name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/>
            </div>
            <div>
                <input type="date" name="dateOfTrip" id="dateOfTrip" placeholder='Date'/>
            </div>
            <div>
                <input type="time" name="timeOfTrip" id="timeOfTrip" placeholder='Time'/>
            </div>
            <div>
                <input type="number" name="availableSeat" id="availableSeat" placeholder='Available Seat'/>
            </div>
            <div>
                <input type="number" name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
            </div>
        </div>
    )
}

export default createRide