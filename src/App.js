import './App.css';
import {MapProvider} from './components/MapContext'
import Map from './components/Map'

function App() {
  return (
    <div style={{height: '500px'}}>
    <MapProvider>
      <Map/>
    </MapProvider>
    </div>
  )
}

export default App;
