import EditIncome from "../EditIncome/EditIncome"
import { useState } from "react"

export default function IncomeItem({income, setIncome}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    const incomeDate = new Date(income.date)
    
    return(
        <div>
            <p>{income.category}</p>
            <p>{income.amount}</p>
            <p>{incomeDate.toLocaleDateString()}</p>
            <button onClick={handleClick}>Edit</button>
            {visible && <EditIncome setIncome={setIncome} income={income} setVisible={setVisible}/>}
        </div>
    )
}