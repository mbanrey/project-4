import { useState } from "react"

export default function ExpenseItem({expense}) {
    return(
        <div className="expense-item">
            <h3>{expense.name}</h3>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
        </div>
    )
}