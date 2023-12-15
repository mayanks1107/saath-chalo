import './App.css';
import Headers from './components/headers';
import Main from './components/main';
import login from './components/login';
import Signup from './components/signup';
function App() {
  return (
    <div className="App">
      <Headers/>
      {/* <Main/> */}
      <Signup/>
    </div>
  );
}

export default App;
