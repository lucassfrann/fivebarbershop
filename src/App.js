import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className='app'>
      <Header />
      <NavBar />
      <ItemListContainer stock={10} initial={1}/>
      <ItemListContainer stock={10} initial={1}/>
      <ItemListContainer stock={10} initial={1}/>
    </div>
  )
}

export default App;