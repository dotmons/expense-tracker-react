import React, { Component, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js'


export const IncomeExpense = () =>{

  const {transactions} = useContext(GlobalContext)
  const income = transactions.map(transaction => transaction.amount).filter(amount => amount>0).reduce((sum, value) => sum+value, 0)
  const expenditure = transactions.map(transaction => transaction.amount).filter(amount => amount<0).reduce((sum, value) => sum+value, 0)

  return (
      
      <div>
         <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">${expenditure}</p>
        </div>
      </div>
        
      </div>
  )
}