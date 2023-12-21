import React from 'react'
import './Scam.css'
import image from '../../assets/scam.png'
import leftquote from "../../assets/left-quote.png";
import block from "../../assets/block.png";
import coins from "../../assets/dollar.png";
import Headers from '../Header/headers';
import Footer from '../Footer/Footer';
import OnlineSecurity from './OnlineSecurity';
import ScamYou from './ScamYou';
import Fake from './Fake';
import AvoidScam from './AvoidScam';

function Scam() {
  return (
    <>
    <Headers/>
      <div class="container">
      
        <div class="image">
          <img  className='Scam-image' src={image} alt="scam"/>
        </div>
        <div class="text">
          <p>Help us keep you safe from scams</p>
        </div>
      </div>

  <AvoidScam block={block} leftquote={leftquote} coins={coins}/>
  <Fake/> 
  <ScamYou/>
    
          <div className='notice-div'>
            <h1>Noticed something suspicious? Report it</h1>
            <p>Help us protect you from scams by reporting if you notice a suspicious message, if you have been scammed or if you think someone is trying to scam you.</p>
            <p>Report a scam</p>
          </div>
   

   <OnlineSecurity/>
   {/* Footer */}
    <Footer/>


    </>
  )
}

export default Scam
