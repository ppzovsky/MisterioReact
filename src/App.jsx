import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '/src/components/sidebar/sidebar';
import Audio from '/src/components/audio/Audio';

function App() {
  const location = useLocation();

  const routesWithoutSidebar = ['/','/login','/cadastro'];

  return (
    <div>
      {routesWithoutSidebar.includes(location.pathname) ? null : <Sidebar />}
      <Audio /> 
      <Outlet />
    </div>
  );
}
export default App;