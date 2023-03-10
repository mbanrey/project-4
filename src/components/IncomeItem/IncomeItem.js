import EditIncome from "../EditIncome/EditIncome"
import { useState } from "react"

export default function IncomeItem({income, setIncome}) {
    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    const incomeDate = new Date(income.date)
    function getFormatedDate(date) {
        const month = date.getMonth()
        const day = date.getDate()
        const year = date.getFullYear()

        return `${String(month + 1).padStart(2, 0)}/${String(day + 1).padStart(2, 0)}/${year}`
    }
    const formatedDate = getFormatedDate(incomeDate)
    
    return(
        <div>
            <p>{income.category}</p>
            <p>{income.amount}</p>
            <p>{formatedDate}</p>
            <button onClick={handleClick}>Edit</button>
            {visible && <EditIncome setIncome={setIncome} income={income}/>}
        </div>
    )
}