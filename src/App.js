import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting='Hola'/>
    </div>
  )
}

export default App;