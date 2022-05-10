import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardStack from '../components/CardStack';

import Card from '../components/Card';

function Home(props) {
    const { cards } = props

    const [activeCard, setActiveCard] = useState([

    ])
    

  

    return(
        <div className='flex home'>

            <h1 className='form-h1'>E-WALLET</h1>

            <h5>ACTIVE CARD</h5>           
            <Card cardInfo={activeCard}/>
            <h5>ACTIVE CARD</h5> 


            <h5>STACK CARD</h5>
            <CardStack cards={cards} setActiveCard={setActiveCard} activeCard={activeCard} />
           <h5>STACK CARD</h5>

            <Link className='flex link' to="/addcard">ADD A NEW CARD</Link>
        </div>
    )
}

export default Home;