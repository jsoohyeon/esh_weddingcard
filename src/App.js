import './App.css';
import './Main.css';
import Main from './Main.js';
import Map from './Map.js';
import Gallery from './Gallery.js'
import Calendar from './Calendar.js'
//import Animate from './Animate.js';

function App() {
  return (

    <div>
      <Main/>
      <Calendar/>
      <Gallery/>
      <Map/>
    </div>
  );
}

export default App;
