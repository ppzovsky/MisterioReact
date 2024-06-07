import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const location = useLocation();

  const routesWithoutSidebar = ['/']; 

  return (
    <div>
      {routesWithoutSidebar.includes(location.pathname) ? null : <Sidebar />} 
      <Outlet />
    </div>
  );
}
export default App;

