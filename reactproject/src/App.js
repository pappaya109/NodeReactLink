import { Routes, Route, } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Join from './components/Join'
import Login from './components/Login'
import Products from './components/Products'
import Details from './components/Details'
import { Reset } from 'styled-reset'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div>
      <Reset/>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/details' element={<Details/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
