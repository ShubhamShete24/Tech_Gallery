import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddProducts  from './components/AddProducts';
import ShowProducts from './components/ShowProducts';
import NavBarMenu from './components/NavBarMenu';
import { ProductDetail } from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarMenu />
        <Routes>
          <Route exact path='' element={<ShowProducts />} />
          <Route exact path='/addProduct' element={<AddProducts />} />
          <Route exact path='/:id/' element={<ProductDetail />} />
          <Route exact path='/:id/update' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
