import Card from "./Card";



const CardStack = ({cards, handleDeleteCard}) => {   

return(
        <div className='flex cardstack'>

                {cards.map((card) => ( <Card 
                id={card.id} 
				cardnumber={card.cardnumber} 
				cardname={card.cardname}
				valid={card.valid} 
				// ccv={card.ccv} 
				vendor={card.vendor} 
				handleDeleteCard={handleDeleteCard}					
				active={card.active}
                
                
                />))}
                
            
            

        </div>
    )
}

export default CardStack;