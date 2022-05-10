import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from './Card';


function CardForm(props) {

    const {addCard} = props

    const [addNumber, setAddNumber] = useState('')
    const [addName, setAddName] = useState('')
    const [addValid, setAddValid] = useState('')
    const [addCcv, setAddCcv] = useState('')
    const [addVendor, setAddVendor] = useState('')  

    const navigate = useNavigate()

    

    function onClick(event) {  

        event.preventDefault(); 
        
        const card = {
            cardnumber: addNumber,
            cardname: addName,
            valid: addValid,
            ccv: addCcv,
            vendor: addVendor,
        }   
        addCard(card)
        console.log('from cardform', card)
        navigate('/')   
    }

   
    




    return(
        <div className="flex form">
            

            

            <form className='flex form-box' onSubmit={onClick}>
                <label className='form-label'>CARD NUMBER</label>
                <input className='flex in-number' placeholder='XXXX XXXX XXXX XXXX' onKeyUp={(event) => setAddNumber(event.target.value)}/>            
                <label className='form-label'>CARD NAME</label>                
                <input className='flex in-name' placeholder='CARD NAME' onKeyUp={(event) => setAddName(event.target.value)}/>           
                <span className='flex label-valid-box'> <label className='form-label'>Valid</label>  <label className='form-label'>CCV</label>  </span>
                <div className='flex valid-box'>
                    <input className='flex in-valid' placeholder='MM/YY' onKeyUp={(event) => setAddValid(event.target.value)}/>          
                    <input className='flex in-ccv' placeholder='CCV' onKeyUp={(event) => setAddCcv(event.target.value)}/> 
                </div>
                
                <label className='form-label'>VENDOR</label>
                <select className='in-vendor' onChange={(event) => setAddVendor(event.target.value)}> 
                    <option value="Bitcoin">BITCON INC</option>
                    <option value="Ninja">NINJA BANK</option>
                    <option value="Block">BLOCK CHAIN INC</option>
                    <option value="Evil">EVIL CORP</option>
                </select>

                {/* <label>Is this your primary card?</label>
                <select className='flex in-primary' onChange={handleInputPrimary}>
                    <option className='flex prim-1' value="false">No</option> 
                    <option className='flex prim-2' value="true">Yes</option>                                   
                </select>             */}

            </form>
            <div className='flex form-btns'>
            <button className='flex form-add' onClick={onClick}>ADD CARD</button>
            <Link  className='flex form-link' to="/">BACK</Link>

            </div>
            

        </div>
    )
}

export default CardForm;