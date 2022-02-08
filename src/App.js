import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  function onAdd() {
    console.log('Producto añadido')
  }
  return (
    <div className='app'>
      <Header />
      <NavBar />    
      <ItemListContainer onAdd={onAdd}/>
      <ItemDetailContainer onAdd={onAdd}/>
    </div>
  )
}

export default App;