import './App.css';
import Home from './components/home';
import Login from './components/Login/login';
import Signup from './components/Register/signupForRider';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Scam from './components/Scam/Scam';
import CreateRide from './components/createRide';
<<<<<<< HEAD
import RideFeed from './components/RideFeed/RideFeed.jsx';
=======
import BookRide from './components/bookRide';

>>>>>>> 8a1578a35d014b6100e5e6dd334ca4e0911b38fc
function App() {
  return(
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                <Route exact path="/scam" element={<Scam/>}/>
                <Route exact path="/createRide" element={<CreateRide/>}/>
<<<<<<< HEAD
                <Route exact path="/rideFeed" element={<RideFeed/>}/>
=======
                <Route exact path="/bookRide" element={<BookRide/>}/>
                
>>>>>>> 8a1578a35d014b6100e5e6dd334ca4e0911b38fc
                
            </Routes>
        </Router>
    </div>
)
}

export default App;
