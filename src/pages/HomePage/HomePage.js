import { useState } from "react"
import PieChart from "../../components/PieChart/PieChart"

function HomePage({userExpenses, setExpenses}) {

  const sumVar = userExpenses.slice(0,5)

  return (
    <div>
      {sumVar && sumVar.map((expense, index) => (
        <div key={index}>
          <h3>{expense.name}</h3>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <p>{new Date(expense.date).toLocaleDateString()}</p>
        </div>
      ))}
      <div className="chia">
      <PieChart expenses={userExpenses} className={'pie'}/>
      </div>
    </div>
  )
}

export default HomePage