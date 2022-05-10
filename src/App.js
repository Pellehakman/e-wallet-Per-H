import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AddCard from './views/AddCard';
import { nanoid } from 'nanoid'

function App() {  

const [cards, setCards] = useState([])

function addCard(card){  
          setCards((prevState) => {
          return [...prevState, card]
        })
 }




  
  return (
    <div className='flex app'>
      <Routes>        
        <Route path='/' element={ < Home cards={ cards }  /> }/>  
        <Route path='/addcard' element={ < AddCard addCard={ addCard } /> }/>  
      </Routes>
    </div>
  );
}

export default App;
