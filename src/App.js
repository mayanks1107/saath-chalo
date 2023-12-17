import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signupForRider';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return(
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                
            </Routes>
        </Router>
    </div>
)
}

export default App;
