import { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

function CardForm({handleSubmit}) {

    const [addNumber, setAddNumber] = useState('')
    const [addName, setAddName] = useState('')
    const [addValid, setAddValid] = useState('')
    const [addCcv, setAddCcv] = useState('')
    const [addVendor, setAddVendor] = useState('Bitcoin')
    const [addPrimary, setAddPrimary] = useState('false')

    const handleInputNumber = (event) => {setAddNumber(event.target.value)}
    const handleInputName = (event) => {setAddName(event.target.value)}
    const handleInputValid = (event) => {setAddValid(event.target.value)}
    const handleInputCcv = (event) => {setAddCcv(event.target.value)}
    const handleInputVendor = (event) => {setAddVendor(event.target.value)}
    const handleInputPrimary = (event) => {setAddPrimary(event.target.value)}

    function handleButton(event) {       
    handleSubmit(addNumber, addName, addValid, addCcv, addVendor, addPrimary)

    event.preventDefault();
    }

    return(
        <div className="flex form">
            <h1 className='form-h1'>ADD A NEW BANK CARD</h1>

            <h5>NEW CARD</h5>

            < Card/>

            <form className='flex form-box' onSubmit={handleButton}>
                <label className='form-label'>CARD NUMBER</label>
                <input className='flex in-number' placeholder='XXXX XXXX XXXX XXXX' onChange={handleInputNumber} value={addNumber}/>            
                <label className='form-label'>CARD NAME</label>                
                <input className='flex in-name' placeholder='CARD NAME' onChange={handleInputName} value={addName}/>           
                <span className='flex label-valid-box'> <label className='form-label'>Valid</label>  <label className='form-label'>CCV</label>  </span>
                <div className='flex valid-box'>
                    <input className='flex in-valid' placeholder='MM/YY' onChange={handleInputValid} value={addValid}/>            
                    <input className='flex in-ccv' placeholder='CCV' onChange={handleInputCcv} value={addCcv}/>
                </div>
                
                <label className='form-label'>VENDOR</label>
                <select className='in-vendor' onChange={handleInputVendor}>
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
            <button className='flex form-add' onClick={handleButton}>ADD CARD</button>
            <Link  className='flex form-link' to="/">BACK</Link>

            </div>
            

        </div>
    )
}

export default CardForm;