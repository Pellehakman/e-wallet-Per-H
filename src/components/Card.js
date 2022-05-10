import {useState} from 'react'
import chipDark from '../e-wallet-assets/chip-dark.svg'


function Card(props){   

    const { cardInfo, setActiveCard, activeCard } = props

    


    return(
        <div className={`active ${cardInfo && activeCard}`} onClick={ () =>{ if (setActiveCard) setActiveCard(cardInfo)}}>

                    <div className='flex top'>
                        <span className='flex chip'>
                        <img src={chipDark} />                               
                        </span> 
                        <span className='flex vendor'>{cardInfo.vendor}</span> 
                        {/* <div className='flex handledelete' onClick={ () => handleDeleteCard(id)}>❌</div> */}
                    </div>
                    <span className='flex cardnumber'>{cardInfo.cardnumber}</span> 
                    <div className='flex low'>
                        <div className='flex low-top'>
                            <label className='flex holder'>CARDHOLDER</label>
                            <label className='flex thru'>VALID THRU</label>
                        </div>
                        <div className='flex low-bot'>
                            <span className='flex cardname'>{cardInfo.cardname}</span>                       
                            <span className='flex valid'>{cardInfo.valid}</span> 
                        </div> 
                    </div>
                    

                    
                    <span className='flex ccv'>{cardInfo.ccv}</span>
                    
                    
                    {/* <div className='flex handletoggle' onClick={handleToggle}>✅</div> */}
                    
            
            
            

        </div>
    )
}

export default Card;