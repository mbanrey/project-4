import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpenseList.css'

export default function ExpenseList({expenses, setExpenses}) {
    return(
        <div className="expense-list">
            <div className="expense-item-description">
            <p className="flex-item">Name</p>
            <p className="flex-item">Category</p>
            <p className="flex-item">Amount</p>
            </div>
            {expenses && expenses.map((expense, index) => (
                <ExpenseItem setExpenses={setExpenses} expense={expense} key={index}/>
            ))}
        </div>
    )
}