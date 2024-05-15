import {BrowserRouter, Routes, Route} from'react-router-dom';
import {Home} from '../pages/Home';
import {Dashboard} from '../pages/Dashboard';
import {Clientes} from '../pages/Clientes';
import {Pedidos} from '../pages/Pedidos';
import {Reportes} from '../pages/Reportes';






export function MyRoutes() {
  return (
    
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/Dashboard' element={ <Dashboard />} />
            <Route path='/Clientes' element={ <Clientes />} />
            <Route path='/Pedidos' element={ <Pedidos />} />
            <Route path='/Reportes' element={ <Reportes />} />
        </Routes>
    
  )
}
