import './App.css';
import {MapProvider} from './components/MapContext'
import Map from './components/Map'
import SiteTree from './components/SiteTree';
import DrawingComponent from './components/DrawingComponent'

function App() {
  return (
    <div style={{height: '500px'}}>
    <MapProvider>
      <Map/>
      <div className="treeContainer">
          <SiteTree/>
      </div>
    </MapProvider>
    </div>
  )
}

export default App;
