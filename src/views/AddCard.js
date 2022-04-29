import { Link } from 'react-router-dom';
import CardForm from '../components/CardForm';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'


function AddCard() {

    const [cards, setCards] = useState([])


  useEffect(() =>{
        const savedCards = JSON.parse(
          localStorage.getItem('CARDS'));
        if (savedCards){
          setCards(savedCards)
        }}, []);

    useEffect(() =>{
            localStorage.setItem('CARDS', JSON.stringify(cards))
          }, [cards])
    
    const addCard = (cardnumber, cardname, valid, ccv, vendor, active) =>{            
        const newCard = {
            id: nanoid(),
            cardnumber: cardnumber,
            cardname: cardname,   
            valid: valid,      
            ccv: ccv,
            vendor: vendor,
            active: active         
        }

        const newCards = [...cards, newCard];
        setCards(newCards)}

    return(
        <div className='flex addcard'>
            <CardForm handleSubmit={addCard}/>
            
        </div>
    )}

export default AddCard;