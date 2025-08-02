import React from 'react';
import Ainews from '../components/ainews';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

function Ainewspage() {
  return (
    <div>
        <Navbar/>
        <div>
          <Ainews/>
        </div>
        <Footer/>
    </div>
  )
}

export default Ainewspage