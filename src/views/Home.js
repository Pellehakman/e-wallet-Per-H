import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardStack from '../components/CardStack';

import Card from '../components/Card';

function Home(props) {
    const { cards } = props

    const [activeCard, setActiveCard] = useState({

        cardnumber: '1234 1234 1234 1234',
            cardname: 'John Johnson',   
            valid: '12/34', 
            ccv: 'ccv',
            vendor: 'NINJA'
    })
    

  

    return(
        <div className='flex home'>

            <h1 className='form-h1'>E-WALLET</h1>

            <h5 className='h5'>ACTIVE CARD</h5>           
            <Card cardInfo={activeCard}/>
           


            <h5 className='h5'>STORED</h5>
            <CardStack cards={cards} setActiveCard={setActiveCard} activeCard={activeCard} />
           

            <Link className='flex link' to="/addcard">ADD A NEW CARD</Link>
        </div>
    )
}

export default Home;