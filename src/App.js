import './App.css';
import './Main.css';
import Main from './Main.js';
import Map from './Map.js';
import Gallery from './Gallery.js'
import Calendar from './Calendar.js'
import Message from './message.js'
//import Animate from './Animate.js';

function App() {
  return (

    <div>
      <Main/>
      <Gallery/>
      <Calendar/>
      <Map/>
      <Message/>
    </div>
  );
}

export default App;
