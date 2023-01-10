import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Account from './Pages/Account';
import Produts from './Pages/Produts';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import CreateAccountPage from './Pages/CreateAccount';
import { CartProvider } from './cartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
        </Routes>
        <Routes>
            <Route element={<Account/>} path='/Account'/>
        </Routes>
        <Routes>
            <Route element={<Produts/>} path='/Products/:dept'/>
        </Routes>
        <Routes>
            <Route element={<ProductDetail/>} path='/ProductDetail/:slug'/>
        </Routes>
        <Routes>
            <Route element={<Cart/>} path='/Cart'/>
        </Routes>
        <Routes>
            <Route element={<CreateAccountPage/>} path='/CreateAccount'/>
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
