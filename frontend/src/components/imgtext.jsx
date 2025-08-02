import React from 'react';
import TypingEffect from './text';
import { Link } from 'react-router-dom';

function ImgText() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 flex-col-reverse items-center text-center">
        <div className="w-full">
          <TypingEffect />
          <p className="mb-8 leading-relaxed text-shadow-lg">
            "AI Kit" is a user-friendly web application designed to help users explore and discover a wide variety of AI tools in one place. It offers clear categories and easy navigation to compare and select tools based on individual needs. The platform aims to make AI more accessible and understandable for everyone, from beginners to professionals."
          </p>
          <Link to='/category'><button className="inline-flex items-center justify-center text-white s border-0 py-2 px-6 focus:outline-none bg-indigo-600 text-lg mx-auto rounded-full w-64">
  Get Started!
</button></Link>

        </div>
        <div className="w-full max-w-md">
          <img
            className="object-cover object-center rounded mx-auto"
            alt="hero"
            src="/Flat_Land_Clipart_Transparent_Background__Modern_Flat_Design_Concept_Of_Social_Media_Marketing_Can_Use_For_Business_Content_Strategy_Analysis_Mobile_App_Landing_Page_Web_Design_Template_Flat_Vector_Il.png"
          />
        </div>
      </div>
    </section>
  );
}

export default ImgText;
