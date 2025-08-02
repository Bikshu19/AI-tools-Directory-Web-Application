import React from "react";
import Apiblocks from'../components/apiblocks';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Apipage(){
    return(
        <div>
                <Navbar/>
            <div>
                <Apiblocks/>
            </div>
            <Footer/>
        </div>
    )
}
export default Apipage;