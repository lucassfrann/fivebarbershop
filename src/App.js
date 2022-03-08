import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {cartContext} from './context/cartContext';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart/Cart';
import BuyerForm from './components/BuyerForm/BuyerForm';

function App() {
  function onAdd() {
    console.log('Producto añadido')
  }
  return (
    <CartContextProvider>
      {console.log(cartContext)}
    <BrowserRouter>
    <div className='app'>
      <NavBar /> 
      <Routes>
        <Route 
        path='/'
        element={<ItemListContainer onAdd={onAdd}/>}
        />

        <Route
        path='/endbuy'
        element={<BuyerForm/>}
        />

        <Route
        path='/category/:category'
        element={<ItemListContainer onAdd={onAdd}/>}
        />

        <Route 
        path='/product/:productId'
        element={<ItemDetailContainer onAdd={onAdd}/>}  
        />

        <Route
        path='/cart'
        element={<Cart/> }
        />

      </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;