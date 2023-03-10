import { useState } from "react"
import EditExpense from "../EditExpense/EditExpense"

export default function ExpenseItem({expense, setExpenses}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    return(
        <div className="expense-item">
            <h3>{expense.name}</h3>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <button onClick={handleClick}>Edit</button>
            {visible && <EditExpense expense={expense} setExpenses={setExpenses}/>}
        </div>
    )
}