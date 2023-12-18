import './App.css';
import Home from './components/home';
import Login from './components/login';
import Security from './components/Security'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return(
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/Security" element={<Security/>}/>

                
            </Routes>
        </Router>
    </div>
)
}

export default App;
