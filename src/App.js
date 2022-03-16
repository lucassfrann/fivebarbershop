import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {cartContext} from './context/cartContext';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart/Cart';
import BuyerForm from './components/BuyerForm/BuyerForm';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import AuthContextProvider, {authContext} from './context/authContext'

function App() {
  function onAdd() {
    console.log('Producto añadido')
  }
  return (
    <AuthContextProvider>
    <CartContextProvider>
    <BrowserRouter>
    <div className='app'>
      <NavBar /> 
      <div className='body'>
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
      <Footer/>
    </div>
    </BrowserRouter>
    </CartContextProvider>
    </AuthContextProvider>
  )
}

export default App;