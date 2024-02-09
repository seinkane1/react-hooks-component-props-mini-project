import React from 'react';
import  about from App.js
// import App from './App';

const About = ({ image, aboutText }) => {
  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};


export default About;
