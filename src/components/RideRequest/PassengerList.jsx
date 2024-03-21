import React, { useEffect } from 'react'
import  {Server} from "../Server/Server";
function PassengerList(props) {
    


  return (
    <>
      <div class="wrapper">
                <div class="rectangular-box">
                    {/* <!-- Row 1 --> */}
                    <div class="row profilePic">
                        <img src={props.Profile} />
                        <div class="column">Passenger Name : <br /><span class="font">{props.FullName}</span></div>
                        <div class="column"></div>
                    </div>

                    {/* <!-- Row 2 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Source : <br /><span class="font">{props.SourcePlace}</span></div>
                        <div class="column">Destination : <br /><span class="font">{props.DestinationPlace}</span></div>
                    </div>

                    {/* <!-- Row 3 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Time : <br /><span class="font">{props.timeOfTrip}</span></div>
                        <div class="column">Date : <br /><span class="font">{props.dateOfTrip}</span></div>

                    </div>

                    {/* <!-- Row 4 --> */}
                    <div class="row">
                        <div class="column1"></div>
                        <div class="column">Gender : <br /><span class="font">{props.Gender}</span></div>
                        <div class="column">Amount : <br /><span class="font">{props.Price}</span></div>

                    </div>
                </div>


            </div>
    </>
  )
}

export default PassengerList
