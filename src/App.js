import './App.css';
import Buscadas from './components/buscadas';
import Ingredientes from './components/Ingredientes';
import Navbar from './components/Navbar';
import Premium from './components/premium/premium';

function App() {
  return (
    <div >
    <Navbar/>
    <Buscadas/>
    <Ingredientes/>
    </div>
  );
}

export default App;
