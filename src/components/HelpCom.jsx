import React from "react";
import "./HelpCom.css";
export default function HelpCom(){
    return(
        <div className="hCom">
            <h1>FAQs</h1>
            <div className="h-cards">
                <h3 className="help-h3">How can I reserve a carpool trip?</h3>
                <p className="h-p">To secure a carpool ride, you can visit our website. Just enter your destination, select your travel date, and choose the most suitable carpool option! While some rides are available for instant booking, others may need approval from the driver. Regardless, the process of reserving a carpool ride is quick, straightforward, and hassle-free.</p>
                <h3 className="help-h3">How do I publish a carpool ride?</h3>
                <p className="h-p">Driving is easy with Saath-Challo. Please visit our website to post your trip. Specify your departure and destination, departure date and time, the number of passengers you can carry, and the price per seat. You can choose to add any important details you think passengers should know. Then click “Publish Ride” to finish!</p>
                <h3 className="help-h3">How do I cancel my carpool ride?</h3>
                <p className="h-p">In case your plans change, you can cancel your carpool ride through the 'Your rides' section on our app. The earlier you cancel, the more time the driver has to accommodate new passengers. The refund amount is contingent on the cancellation timing. For instance, canceling more than 24 hours before departure ensures a full refund, except for the service fee.</p>
                <div className="h-cards-right">
                    <h3 className="help-h3 h3-right">What is the price of a carpool ride?</h3>
                    <p className="h-p p-right-h">The expenses associated with a carpool ride are diverse and influenced by factors such as distance, departure time, ride demand, and others. It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride For an estimate, you can explore pricing details for popular carpool destinations or initiate a search for your next carpool ride on Saath-Challo.</p>
                    <h3 className="help-h3 h3-right">Why Bikepool?</h3>
                    <p className="h-p p-right-h">Quick. Cost-effective.<br/>
                    Bike pooling enables commuters to reduce travel time and save money. It has emerged as an ideal solution for urban daily commuters, particularly during peak hours. Bikepool options are available at rates as low as 4/km. If you own a bike, you can contribute to bikepooling, earning free fuel and potentially saving up to Rs. 4000 per month.
                    </p>
                </div>
                
            </div>
            
        </div>
    )
}