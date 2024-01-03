import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Offering from './components/Offering';
import Products from './components/products';
import All_in_one from './components/All_in_one';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <Home />
        <Offering/>
        <Products/>
        <All_in_one/>
        <Footer/>
    </div>
  );
}

export default App;
