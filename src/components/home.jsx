import '../App.css';
import Headers from './headers';
import Main from './main';
import Cards from './Cards';
import Safety from './Safety';
import Services from './Services';
import HelpHome from './helpHome';
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