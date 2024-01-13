import './App.css';
import Home from './components/home';
import Login from './components/Login/login';
import RiderSignup from './components/Register/signupForRider';
import UserSignup from './components/Register/signupForUser'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Scam from './components/Scam/Scam';
import CreateRide from './components/createRide';
import BookRide from './components/bookRide';
import Thankyou from './components/ThankYou/Thankyou'
import RideRequest from './components/RideRequest/rideRequest'

function App() {
  return(
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* login and Register page */}
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/rider-register" element={<RiderSignup/>}/>
                <Route exact path="/user-register" element={<UserSignup/>}/>
                {/*  */}
                <Route exact path="/scam" element={<Scam/>}/>
                <Route exact path="/createRide" element={<CreateRide/>}/>
                <Route exact path="/bookRide" element={<BookRide/>}/>
                <Route exact path="/thankyou" element={<Thankyou/>}/>
                <Route exact path="/rideRequest" element={<RideRequest/>}/>
                <Route exact path="/register" element={<RiderSignup/>}/>
                
            </Routes>
        </Router>
    </div>
)
}

export default App;
