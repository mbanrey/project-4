import { useState } from "react"
import PieChart from "../../components/PieChart/PieChart"

function HomePage({userExpenses}) {
  const [expenses, setExpenses] = useState(userExpenses)

  return (
    <div>
      {expenses && expenses.map((expense, index) => (
        <div key={index}>{expense.amount}</div>
      ))}
      <div className="chia">
      <PieChart className={'pie'}/>
      </div>
    </div>
  )
}

export default HomePage