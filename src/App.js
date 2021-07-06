import './App.css';
import './CSS/style.css';
import './CSS/font.css';
import Main from './Main.js';
import Map from './Map.js';
import Gallery from './Gallery.js'
import Calendar from './Calendar.js'
import Contact from './Contact.js'
//import Message from './message.js'
//import Animate from './Animate.js';

function App() {
  return (

    <div>
      <Main/>
      <Calendar/>
      <Contact/>
      <Gallery/>
      <Map/>
    </div>
  );
}

export default App;
