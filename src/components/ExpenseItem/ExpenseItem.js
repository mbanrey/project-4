import { useState } from "react"
import EditExpense from "../EditExpense/EditExpense"

export default function ExpenseItem({expense, setExpenses}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    const expenseDate = new Date(expense.date)
    function getFormatedDate(date) {
        const month = date.getMonth()
        const day = date.getDate()
        const year = date.getFullYear()

        return `${String(month + 1).padStart(2, 0)}/${String(day + 1).padStart(2, 0)}/${year}`
    }
    const formatedDate = getFormatedDate(expenseDate)

    return(
        <div className="expense-item">
            <h3>{expense.name}</h3>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <p>{formatedDate}</p>
            <button onClick={handleClick}>Edit</button>
            {visible && <EditExpense expense={expense} setExpenses={setExpenses}/>}
        </div>
    )
}