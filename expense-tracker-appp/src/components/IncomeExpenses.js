import React, { useContext } from 'react'
import {GlobalContext, GlobalProvider} from '../context/GlobalState'

const IncomeExpenses = () => {
  const {transaction} = useContext(GlobalContext);
  const amountsPlus =  transaction.map(transaction => transaction.amount > 0 ? transaction.amount : 0)
  const total = amountsPlus.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const amountsMinus = transaction.map(transaction => transaction.amount < 0 ? transaction.amount : 0);
  const totalMinus = amountsMinus.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
                <p className="money plus">+${total}</p>
        </div>
        <div>
            <h4>Expense</h4>
                <p className="money minus">-${Math.abs(totalMinus)}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
