import { useState ,useEffect } from 'react'
import './App.css'
import { BsArrowLeftRight } from "react-icons/bs";
// "https://flagsapi.com/:country_code/:style/:size.png"

import countryList from './codes'

function App() {
const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const [dropdownOptions, setDropdownOptions] = useState([]);

useEffect(() => {
  const options = [];
  for (let currCode in countryList) {
    options.push(
      <option key={currCode} value={currCode}>
        {currCode}
      </option>
    );
  }
  setDropdownOptions(options);
}, []);

  return (
    <>
      <header className='appHead'>
        <h1>Currency Converter</h1>
        <p>Need to make an international business payment? Take a look at our live foreign exchange rates.</p>
      </header>
      <div className="container">
        <h2>Make fast and affordable<br /> international bussiness payments</h2>
        <form  className='curency_form'>
          <div className='amount'>
            <label htmlFor="amount">Amount:
              <input type='text' placeholder='Amount' name='amount' />
            </label>
          </div>
          <div className="dropdown">
            <div className="select__container">
              <select name="from">
               {dropdownOptions}
              </select>
            </div>
          </div>
          <BsArrowLeftRight className='icon' />
          <div className='converted__to'>
            <label htmlFor="Converted">Converted To:
              <input type='text' placeholder='Converted' name='Converted' />
            </label>
          </div>
          <div className="dropdown">
            <div className="select__container">
              <select name="from" id="">
                {dropdownOptions}
              </select>
            </div>
          </div>
        </form>
        <div className='bottom_container'>
            <div className="rate_display">
              <p>1 USD = 70 INR</p>
            </div>
            <button type='submit'>Convert Rate</button>
          </div> 
      </div>
    </>
  )
}

export default App
