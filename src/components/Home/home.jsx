import '../App.css';
import Headers from './Header/headers';
import Main from './Home/main';
import Cards from './Home/Cards';
import Safety from './Safety/Safety';
import Services from './Home/Services';
import HelpHome from './HelpHome/helpHome';
function Home() {
  return (
    <div className="App">
      <Headers/>
      <Main/>
      <Cards/>
      <Safety/>
      <Services/>
      <HelpHome/>
    </div>
  );
}

export default Home;