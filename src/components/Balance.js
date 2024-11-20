import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js';


export const Balance = () => {

  const {transactions} = useContext(GlobalContext);

  const totalAmount = transactions.map(transaction => transaction.amount).reduce((sum, value) => sum+value,0).toFixed(2);
    
  return (
    <div>
        <h4>Your Balance</h4>
        <h1>${totalAmount}</h1>
    </div>
  )
}
