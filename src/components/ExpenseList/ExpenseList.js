import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpenseList.css'
import { useState } from "react"
import Paginate from "../Paginate/Paginate"

export default function ExpenseList({expenses, setExpenses}) {
    const [selectedPage, setSelectedPage] = useState(1)
    const [displayed, setDisplayed] = useState(expenses.slice(0,5))
    const numPerPage = 5
    const numOfPages = Math.ceil(expenses.length / numPerPage)


    function getPreviousPage() {
        if(selectedPage === 1) {
            return
        }
        const startingIndex = numPerPage * (selectedPage - 2)
        setSelectedPage(prev => prev - 1)
        setDisplayed(expenses.slice(startingIndex, startingIndex + numPerPage))
    }

    function getNextPage() {
        if(selectedPage === numOfPages) {
            return
        }
        const startingIndex = numPerPage * (selectedPage)
        setSelectedPage(prev => prev + 1)
        setDisplayed(expenses.slice(startingIndex, startingIndex + numPerPage))
    }

    function getSpecificPage(page) {
        setSelectedPage(page)
        const startingIndex = numPerPage * (page - 1)
        setDisplayed(expenses.slice(startingIndex, startingIndex + numPerPage))
    }

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
                getPreviousPage={getPreviousPage} 
                getNextPage={getNextPage}
                getSpecificPage={getSpecificPage}
                numOfPages={numOfPages}
            />
        </div>
    )
}