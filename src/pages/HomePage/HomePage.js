import { useState } from "react"
import PieChart from "../../components/PieChart/PieChart"

function HomePage({userExpenses, setExpenses}) {

  return (
    <div>
      {userExpenses && userExpenses.map((expense, index) => (
        <div key={index}>{expense.amount}</div>
      ))}
      <div className="chia">
      <PieChart expenses={userExpenses} className={'pie'}/>
      </div>
    </div>
  )
}

export default HomePage