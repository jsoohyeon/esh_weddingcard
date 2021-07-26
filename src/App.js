import './App.css';
import './CSS/style.css';
import './CSS/font.css';
import Main from './Main.js';
import Map from './Map.js';
import Gallery from './Gallery.js'
import Calendar from './Calendar.js'
import Message from './Message.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import Loading from './Loading.js'
import React,{ useState } from "react";
//import Animate from './Animate.js';

function App() {
  return (
    <div /*style={{position:'absolute'}}*/>
      <Main/>
      <Calendar/>
      <Contact/>
      <Gallery/>
      <Map/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
