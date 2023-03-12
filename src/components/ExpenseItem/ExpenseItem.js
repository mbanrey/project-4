import { useState } from "react"
import EditExpense from "../EditExpense/EditExpense"
import './ExpenseItem.css'

export default function ExpenseItem({expense, setExpenses}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    const expenseDate = new Date(expense.date)

    return(
        <div className="expense-item" >
            <div className="date-and-button" >
            <p>{expenseDate.toLocaleDateString()}</p>
            <button onClick={handleClick}>Edit</button>
            </div>
            <div className="expense-item-description">
            <p className="flex-item">{expense.name}</p>
            <p className="flex-item">{expense.category}</p>
            <p className="flex-item">${expense.amount}</p>
            </div>
            
            {visible && <EditExpense expense={expense} setExpenses={setExpenses} setVisible={setVisible}/>}
        </div>
    )
}