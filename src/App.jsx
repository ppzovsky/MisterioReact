import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import { useState } from 'react';
import Audio from '../src/components/audio/Audio';

function App() {
  const location = useLocation();

  const routesWithoutSidebar = ['/','/login','/cadastro'];
  
  const [audio, setAudio] = useState(false);

  function habilitaAudio(){
    setAudio(!audio);
  }

  return (
    <div style={{ position: 'relative' }}>
      {routesWithoutSidebar.includes(location.pathname) ? null : <Sidebar />} 
      <div style={{ position: 'fixed', top: 0, right: 0 }}>
        <label style={{ display: 'block', width: '40px', height: '20px', borderRadius: '5px'}}>
          <input name="Desligar música" type="checkbox" style={{ width: '20px', height: '20px' }} onClick={() => habilitaAudio()} />
        </label>
      </div>
      <Audio mutado={!audio}/>
      <Outlet />
    </div>
  );
}

export default App;
