import React from 'react';
import axios from 'axios';
import '../App.css';
import Navbar from '../components/Navbar';
import ImgText from '../components/imgtext';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';

function Homepage() {
  return (
    <div >
      <div className='fade-in'>
      <Navbar/>
      <div className="pt-1">
        <ImgText />
      </div>
      <div>
       <Chatbot/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
