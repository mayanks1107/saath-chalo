import '../../App.css';
import Headers from '../Header/headers';
import Main from './main';
import Cards from './Cards';
import Safety from './Safety';
import Services from './Services';
import HelpHome from './helpHome';
import HelpCom from './HelpCom';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <div className="App">
      <Headers/>
      <Main/>
      <Cards/>
      <Safety/>
      <Services/>
      <HelpHome/>
      <HelpCom/>
      <Footer/>
    </div>
  );
}

export default Home;