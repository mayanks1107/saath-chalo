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
              
                {/*  */}
                <Route exact path="/scam" element={<Scam/>}/>
                <Route exact path="/createRide" element={<CreateRide/>}/>
                <Route exact path="/bookRide" element={<BookRide/>}/>
                <Route exact path="/thankyou" element={<Thankyou/>}/>
                <Route exact path="/rideRequest" element={<RideRequest/>}/>
                
                <Route exact path="/rideFeed" element={<RideFeed/>}/>
                <Route exact path = "/confirm" element={<Confirm/>}/>
            </Routes>
            {/* </ContextProvider> */}
        </Router>
    </div>
)
}

export default App;
