import { Link } from 'react-router-dom';
import CardForm from '../components/CardForm';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Card from '../components/Card';
import Top from '../components/Top';


function AddCard(props) {

  const {addCard} = props

  const [card, setCard] = useState({
            cardnumber: '1234 1234 1234 1234',
            cardname: 'John Johnson',   
            valid: '12/34', 
            ccv: 'ccv',
            vendor: 'NINJA'

  })






    return(
        <div className='flex addcard'>

          <Top />          

          <Card cardData={ card } />

          <CardForm addCard={addCard} setCard={setCard} />
            
        </div>
    )}

export default AddCard;