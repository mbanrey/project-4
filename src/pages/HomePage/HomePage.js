import { useState } from "react"
import PieChart from "../../components/PieChart/PieChart"
import LineGraph from "../../components/LineGraph/LineGraph"

function HomePage({userExpenses, setExpenses, income}) {

  const sumVar = userExpenses.slice(0,5)

  return (
    
    <div>
      <div className="chia">
        <PieChart expenses={userExpenses} className={'pie'}/>
        <LineGraph income={income} expenses={userExpenses}/>
      </div>
      <div>
      {sumVar && sumVar.map((expense, index) => (
        <div key={index}>
            <p>{new Date(expense.date).toLocaleDateString()}</p>
            <p>{expense.name}</p>
            <p>{expense.category}</p>
            <p>{expense.amount}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomePage