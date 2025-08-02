import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import CompareTools from '../components/comparetools';

function Compareai() {
  return (
    <div>
            <Navbar/>
        <div>
            <CompareTools/>
        </div>
        <Footer/>
    </div>
  )
}

export default Compareai;