import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {cartContext} from './context/cartContext';

function App() {
  function onAdd() {
    console.log('Producto añadido')
  }
  return (
    <cartContext.Provider>
      {console.log(cartContext)}
    <BrowserRouter>
    <div className='app'>
      <Header />
      <NavBar /> 
      <Routes>
        <Route 
        path='/'
        element={<ItemListContainer onAdd={onAdd}/>}
        />

        <Route
        path='/category/:category'
        element={<ItemListContainer onAdd={onAdd}/>}
        />

        <Route 
        path='/product/:productId'
        element={<ItemDetailContainer onAdd={onAdd}/>}  
        />

      </Routes>
    </div>
    </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App;