import Card from "./Card";



function CardStack (props){   

	const {cards, setActiveCard, activeCard} = props

	const cardItems = cards.map((card, index) => {
		return <Card cardInfo={card} key={index}
		setActiveCard={setActiveCard} activeCard={activeCard}/>
	})
	

return(
        <div className='flex cardstack'>
			{cardItems}       
        </div>
    )
}

export default CardStack;