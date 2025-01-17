import React, { Component, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState.js';


export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }

      const trans = {
        id: 10,
        text: 'Mango',
        amount: 120
      }
    


{
    return (
      <div>
              <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}> 
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" id="textTransaction" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amountTransaction" value = {amount}  onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        
      </div>
    )
  }
}
