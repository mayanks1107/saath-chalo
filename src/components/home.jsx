import '../App.css';
import Headers from './Header/headers';
import Main from './Home/main';
import Cards from './Home/Cards';
import Safety from './Home/Safety';
import Services from './Home/Services';
import HelpHome from './Home/helpHome';
import HelpCom from './Home/HelpCom';
import Footer from './Footer/footer';
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