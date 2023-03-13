import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpenseList.css'
import { useState } from "react"
import Paginate from "../Paginate/Paginate"

export default function ExpenseList({expenses, setExpenses}) {
    const [selectedPage, setSelectedPage] = useState(1)
    const [displayed, setDisplayed] = useState(expenses.slice(0,5))

    return(
        <div className="expense-list">
            <div className="expense-item-description">
            <p className="flex-item">Name</p>
            <p className="flex-item">Category</p>
            <p className="flex-item">Amount</p>
            </div>
            {displayed && displayed.map((expense, index) => (
                <ExpenseItem setExpenses={setExpenses} expense={expense} key={index}/>
            ))}
            <Paginate 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                setDisplayed={setDisplayed}
                numPerPage={5}
                pagenatedItems={expenses}
            />
        </div>
    )
}