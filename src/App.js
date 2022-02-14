import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  function onAdd() {
    console.log('Producto añadido')
  }
  return (
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
        element={<ItemDetailContainer/>}  
        />

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;