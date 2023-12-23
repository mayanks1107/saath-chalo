import React from 'react'
import './createRide.css';
import Headers from './Header/headers';
import Footer from './Footer/Footer';
function createRide() {
    return (
        <div className='create-ride'>
            <Headers/>
            <div className='form-create'>
                <label for="vehicleNumber"><b>Vehicle Number</b></label>
                <input className='v-no input-create' type="text" name="vehicleNumber" id="vehicleNumber" placeholder='Vehicle Number'/>
                <br/>
                <br/>
                <label for="source"><b>Source</b></label>
                <input className='so input-create' type="text" name="source" id="source" placeholder='Source' />
                <br/>
                <br/>
                <label for="destination"><b>Destination</b></label>
                <input className='dest input-create' type="text" name="destination" id="destination" placeholder='Destination' />
                <br/>
                <br/>
                <label for="typeOfTrip"><b>Type Of Trip</b></label>
                <input className='trip input-create' type="check" name="typeOfTrip" id="typeOfTrip" placeholder='1 way / 2 way'/>
                <br/>
                <br/>
                <label for="dateOfTrip"><b>Date Of Trip</b></label>
                <input className='date input-create' type="date" name="dateOfTrip" id="dateOfTrip" placeholder='Date'/>
                <br/>
                <br/>
                <label for="timeOfTrip"><b>Time Of Trip</b></label>
                <input className='time input-create' type="time" name="timeOfTrip" id="timeOfTrip" placeholder='Time'/>
                <br/>
                <br/>
                <label for="availableSeat"><b>Available Seat</b></label>
                <input className='av-seat input-create' type="number" name="availableSeat" id="availableSeat" placeholder='Available Seat'/>
                <br/>
                <br/>
                <label for="phoneNumber"><b>Phone Number</b></label>
                <input className='phone input-create' type="number" name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
                <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'} alt='img-create' className='img-create'/>
            </div>
            <Footer className="foot"/>
        </div>
    )
}

export default createRide