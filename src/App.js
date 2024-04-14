import './App.css';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Register/signup';
// import  {ContextProvider} from './components/Context/ContextProvider';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Scam from './components/Scam/Scam';
import CreateRide from './components/createRide';
import BookRide from './components/Bookride/bookRide';
import Thankyou from './components/ThankYou/Thankyou'
import RideRequest from './components/RideRequest/rideRequest'
import RideFeed from './components/RideFeed/RideFeed';
import Confirm from './components/Confirmation/confirm';
import Profile from './components/Profile/profile';
import RiderProfile from './components/Profile/RidePro';
import GmailRegister from './components/Register/GmailRegister';
import Gmail from './components/Login/Gmail';
import RideHome from './components/RideFeed/RideHome';
import Pay from './components/Payment/Payment'

// import Thankyou from './components/ThankYou/Thankyou';
function App() {
  return(
    <div className="App">
        <Router>
             {/* <ContextProvider> */}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* login and Register page */}
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                <Route exact path="/gmail-register" element={<GmailRegister/>}/>
                <Route exact path="/gmail" element={<Gmail/>}/>
              
                {/*  */}
                <Route exact path="/scam" element={<Scam/>}/>
                <Route exact path="/createRide" element={<CreateRide/>}/>
                <Route exact path="/bookRide" element={<BookRide/>}/>
                <Route exact path="/thankyou" element={<Thankyou/>}/>
                <Route exact path="/rideRequest" element={<RideRequest/>}/>
                
                <Route exact path="/rideFeed" element={<RideFeed/>}/>
                <Route exact path = "/rideHome" element={<RideHome/>}/>

                <Route exact path = "/confirm" element={<Confirm/>}/>
                <Route exact path = "/userprofile" element={<Profile/>}/>
                <Route exact path = "/riderprofile" element={<RiderProfile/>}/>
                
                {/* payment path */}
                <Route exact path = "/payment" element={<Pay/>}/>
                
                {/* <Route exact path = "/thankyou" element={<Thankyou/>}/> */}
                {/* <Route exact path = "" element={<UserManagement/>}/> */}
            </Routes>
            {/* </ContextProvider> */}
        </Router>
    </div>
)
}

export default App;
