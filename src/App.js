import './App.css';
import Headers from './components/headers';
import Main from './components/main';
import login from './components/login';
import Signup from './components/signup';
import Signupforrider from './components/signupForRider';
function App() {
  return (
    <div className="App">
      <Headers/>
      {/* <Main/> */}
      
      <Signupforrider/>
    </div>
  );
}

export default App;
