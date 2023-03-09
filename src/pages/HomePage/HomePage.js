import { useState } from "react"

function HomePage({userExpenses}) {
  const [expenses, setExpenses] = useState(userExpenses)

  return (
    <div>
      {expenses && expenses.map((expense, index) => (
        <div key={index}>{expense.amount}</div>
      ))}
    </div>
  )
}

export default HomePage