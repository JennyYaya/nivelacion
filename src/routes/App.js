import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navegacion from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductosCreados from '../Pages/ProductosCreados';
import CrearProducto from '../Pages/CrearProducto';


function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<ProductosCreados/>}/>   
        <Route path='/crearproducto' element={<CrearProducto/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
