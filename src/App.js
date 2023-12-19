import './App.css';
import Home from './components/home';
import Login from './components/Login/login';
import Signup from './components/Register/signupForRider';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Scam from './components/Scam/Scam';
import Security from './components/Scam/Security';
function App() {
  return(
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                <Route exact path="/scam" element={<Scam/>}/>
                <Route exact path='/scam2' element={<Security/>}/>
                
            </Routes>
        </Router>
    </div>
)
}

export default App;
