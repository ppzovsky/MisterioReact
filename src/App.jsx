import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';
import Audio from '../src/components/audio/Audio';


function App() {
  const location = useLocation();

  const routesWithoutSidebar = ['/'];
  
  const [audio, setAudio] = useState(false);

    function habilitaAudio(){
        setAudio(!audio);
    }

  return (
    <div>
      {routesWithoutSidebar.includes(location.pathname) ? null : <Sidebar />} 
      <input name="Desligar música" type="checkbox" onClick={() => habilitaAudio()} style={{right:0, position:'absolute'}}/>
      <Audio mutado={!audio}/>
      <Outlet />
    </div>
  );
}
export default App;

