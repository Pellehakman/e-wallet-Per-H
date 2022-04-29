import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AddCard from './views/AddCard';

function App() {
  return (
    <div className='flex app'>
      <Routes>        
        <Route path='/' element={ < Home /> }/>  
        <Route path='/addcard' element={ < AddCard/> }/>  
      </Routes>
    </div>
  );
}

export default App;
