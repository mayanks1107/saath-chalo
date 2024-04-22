import axios from "axios";
import { useEffect, useState } from "react";
import "./Payment.css";
import { Server } from "../Server/Server"
import { useNavigate, useLocation } from "react-router-dom";



function Payment() {

	let location = useLocation()
	let RiderName = location.state.RiderName;
	let RiderEmail = location.state.RiderEmail;
	let SourcePlace = location.state.SourcePlace;
	let DestinationPlace = location.state.DestinationPlace;
	let VehicleNumber = location.state.VehicleNumber;

	const [RiderInfo, setRiderInfo] = useState();
	useEffect(() => {
		const getRiderInfo = async () => {
			const url = `${Server}/tripdet/getRider/${RiderEmail}`;
			const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
			if (response.ok) {
				const data = await response.json();
				console.log(data[0]);
				setRiderInfo(data[0]);
			}
		}
		getRiderInfo();
	}, [])
	console.log(location.state.Price);

	const [price, setPrice] = useState({ value: location.state.Price});

	const initPayment = (data) => {
		let useremail = JSON.parse(localStorage.getItem("token")).Email; 
		let ActualPrice = data.amount;
		const options = {
			key: "rzp_test_Tl8nN70qvSSoQ3",
			amount: data.amount,
			currency: data.currency,
			description: "Payment for the ride",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = `${Server}/api/payment/verify`;

					const { data } = await axios.post(verifyUrl, response);

					if(data.success ===true){
						const url = `${Server}/passenger/updatepod/${useremail}`;
						console.log(typeof (price));
						const response = await fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' },
						body:JSON.stringify({
							Price:ActualPrice,
							PaymentMethod:	"Online",
							PaymentStatus:	"Paid"
						  })});
						if (response.ok) {
							const data = await response.json();
							console.log(data);
						}
						
					}
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = `${Server}/api/payment/orders`;
			const { data } = await axios.post(orderUrl, { amount: price.value });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="payment">
			<div className="price_container">
				<div className="sub_containers">
					<div className="box">
						<div class="price_value">
							<div><strong>Rider's Name:</strong></div>
							<div>{RiderName.toUpperCase()}</div>
							<div><strong>Source:</strong></div>
							<div>{SourcePlace.charAt(0).toUpperCase() + SourcePlace.slice(1)}</div>
							<div><strong>Destination:</strong></div>
							<div>{DestinationPlace.charAt(0).toUpperCase() + DestinationPlace.slice(1)}</div>
							<div><strong>Vehicle Number:</strong></div>
							<div>{VehicleNumber}</div>
						</div>
					</div>

					<div className="box">
						<div className="price_value">
							<div><strong>Price :</strong></div>
							<div><span>&#x20B9; {price.value}</span></div>
						</div>
						<button onClick={handlePayment} className="pay_btn">
							Confirm Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;