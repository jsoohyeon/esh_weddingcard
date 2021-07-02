import './App.css';
import './Main.css';
import Main from './Main.js';
import Map from './Map.js';
import Gallery from './Gallery.js'
import Calendar from './Calendar.js'
import Conffeti from './Confetti.js'
//import Message from './message.js'
//import Animate from './Animate.js';

function App() {
  return (

    <div>
      <Main/>
      <Conffeti/>
      <Calendar/>
      <Gallery/>
      <Map/>
    </div>
  );
}

export default App;
