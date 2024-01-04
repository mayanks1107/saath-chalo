import '../App.css';
import Headers from './Header/headers';
import Main from './Home/main';
import Cards from './Home/Cards';
import Safety from './Home/Safety';
import Services from './Home/Services';
import HelpHome from './Home/helpHome';
import HelpCom from './Home/HelpCom';
<<<<<<< HEAD
import Footer from './Footer/Footer.jsx';

=======
import Footer from './Footer/Footer';
>>>>>>> 8a1578a35d014b6100e5e6dd334ca4e0911b38fc
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