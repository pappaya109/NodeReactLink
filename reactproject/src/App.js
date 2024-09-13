import { Routes, Route, } from 'react-router-dom'
import { createContext, useContext, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './pages/Main'
import Join from './components/Join'
import Login from './components/Login'
import Products from './pages/Products'
import Details from './pages/Details'
import { Reset } from 'styled-reset'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyInfo from './pages/MyInfo';
export const modalStore = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <modalStore.Provider value={{ showModal, setShowModal }}>
      { 
        showModal === true ?
        <Login /> :
        null
      } 
      <Reset />
        <Header />
      </modalStore.Provider>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/myinfo' element={<MyInfo />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/details' element={<Details />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
