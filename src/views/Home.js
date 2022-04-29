import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardStack from '../components/CardStack';
import Top from '../components/Top';

function Home() {
    const [cards, setCards] = useState([]);  
    
    

    useEffect(() =>{
        const savedCards = JSON.parse(localStorage.getItem('CARDS'));
        if (savedCards){setCards(savedCards)}}, []);

    useEffect(() =>{ localStorage.setItem('CARDS', JSON.stringify(cards))}, [cards])

    const deleteCard = (id) =>{
        const newCards = cards.filter((card) => card.id !== id)
        setCards(newCards)}

    return(
        <div className='flex home'>

            <h1 className='form-h1'>E-WALLET</h1>

            <h5>ACTIVE CARD</h5>
            {/* <Top /> */}
            
            <CardStack 
            cards={cards}
            handleDeleteCard={deleteCard}/>

            <Link className='flex link' to="/addcard">ADD A NEW CARD</Link>
        </div>
    )
}

export default Home;