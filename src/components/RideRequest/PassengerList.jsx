import React from 'react'

function PassengerList(props) {
    
 console.log(props._id)
 console.log(props)

  return (
    <>
      <div class="wrapper">
                <div class="rectangular-box">
                    {/* <!-- Row 1 --> */}
                    <div class=" profilePic">
                        <img src={props.Profile} alt='profile' />
                        <div class="column">Passenger Name : <br /><span class="font">{props.FullName}</span></div>
                        <div class="column"></div>
                    </div>

                    {/* <!-- Row 2 --> */}
                    <div class="">
                        <div class="column1s"></div>
                        <div class="columns">Source : <br /><span class="font">{props.SourcePlace}</span></div>
                        <div class="columns">Destination : <br /><span class="font">{props.DestinationPlace}</span></div>
                    </div>

                    {/* <!-- Row 3 --> */}
                    <div class="">
                        <div class="column1s"></div>
                        <div class="columns">Time : <br /><span class="font">{props.timeOfTrip}</span></div>
                        <div class="columns">Date : <br /><span class="font">{props.dateOfTrip}</span></div>

                    </div>

                    {/* <!-- Row 4 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Gender : <br /><span class="font">{props.Gender}</span></div>
                        <div class="column">Amount : <br /><span class="font">{props.Price}</span></div>

                    </div>
                    <button onClick={()=>props.Bookride(props._id)}>Accept⚡</button>
                    <button onClick={()=>props.RejectRide(props._id)}>Reject⚡</button>

                </div>


            </div>
    </>
  )
}

export default PassengerList
