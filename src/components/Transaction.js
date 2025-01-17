import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState.js'




export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

  return (
    <div>
      <li className={transaction.amount<0? 'minus' : 'plus'}>
          {transaction.text} <span>{transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
          
        </li> 
    </div>
  )
}
