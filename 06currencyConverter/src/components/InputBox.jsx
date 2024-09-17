/* eslint-disable react/prop-types */ 
import {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisableed = false,
    className = "",
}) 
{
    const id = useId()  // it generates unique id 
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
       <div className='w-1-2'>
   <label htmlFor= "currency"className='text-black/40 mb-2 inline-block'>{label}</label>
   <input
   id={id}
   type="numbers"
   className='outline-none w-full bg-transparent py-1.5'
   placeholder='Amount'
   disabled={amountDisabled}
   value = {amount}
   onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}  // we grab the value but as a numbers 
   />
       </div>
   <div className='w-1/2 flex flex-wrap justify-end text-right'>
   <p className="text-black/40 mb-2 w-full">Currency Type</p>
   <select
   className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
   value={selectedCurrency}
   onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
   disabled = {currencyDisableed}
>
    {/* we just make a loop below on currencyoption for all the currency opions for looping we use map inside map there is a call back in which you will get currency  which are store in arrays  */}
    {currencyOptions.map((currency)=>(
      <option key={currency} value={currency}>{currency}</option>
   ) )}

   </select>

   </div>

        </div>
    )
}
 

export default InputBox