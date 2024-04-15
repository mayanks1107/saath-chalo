import axios from "axios";
import { useState } from "react";
import "./Payment.css";
import {Server} from "../Server/Server"


function Payment() {
	const [price, setPrice] = useState({
		value: 250,
	});

	const initPayment = (data) => {
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
					console.log(data);
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
				<p className="price_value">
					Price : <span>&#x20B9; {price.value}</span>
				</p>
				<button onClick={handlePayment} className="pay_btn">
					Confirm Payment
				</button>
			</div>
		</div>
	);
}

export default Payment;