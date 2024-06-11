import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Audio from '../src/components/audio/Audio';

function App() {
  const location = useLocation();

  const routesWithoutSidebar = ['/','/login','/cadastro','/derrota','/vitoria'];

  return (
    <div>
      {routesWithoutSidebar.includes(location.pathname) ? null : <Sidebar />}
      <Audio /> 
      <Outlet />
    </div>
  );
}
export default App;