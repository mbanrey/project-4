import { useState } from "react"
import EditExpense from "../EditExpense/EditExpense"

export default function ExpenseItem({expense, setExpenses}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    const expenseDate = new Date(expense.date)

    return(
        <div className="expense-item">
            <h3>{expense.name}</h3>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <p>{expenseDate.toLocaleDateString()}</p>
            <button onClick={handleClick}>Edit</button>
            {visible && <EditExpense expense={expense} setExpenses={setExpenses} setVisible={setVisible}/>}
        </div>
    )
}