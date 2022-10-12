import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Pages/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MintingCol from './Pages/MintingCol/MintingCol';

function App() {

  return (
    <>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='*' element={<Home/>} />
    <Route path='/minting' element={<MintingCol/>} />
    </Routes>
    
    
    <div className='footer-container'>
      <Footer/>
    </div>
    
    </>
    
  );
}

export default App;
