import { Link } from 'react-router-dom';
import CardForm from '../components/CardForm';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
// import Top from '../components/Top';
import CardStack from '../components/CardStack';


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
    
    const addCard = (cardnumber, active) =>{  
      if(active === 'false'){    
        const inactiveCard = {
            id: nanoid(),
            cardnumber: cardnumber,
            active: false,
        }      
        
        const inactiveCards = [...cards, inactiveCard];
        setCards(inactiveCards)
        }



        if(active === 'true'){
          const activeCard = {
            id: nanoid(),
            cardnumber: cardnumber,
            active: true,


          }

          const activeCards = [...cards, activeCard];
          setCards(activeCards)
          return(
            <>
            <CardStack data={activeCards}/>            
            </>
          )
          
          

        }


      }

    return(
        <div className='flex addcard'>
            <CardForm handleSubmit={addCard}/>
            

            
            <Link to="/">Home</Link>
        </div>
    )}

export default AddCard;