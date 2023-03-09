import ExpenseItem from "../ExpenseItem/ExpenseItem"

export default function ExpenseList({expenses}) {
    return(
        <div className="expense-list">
            {expenses && expenses.map((expense, index) => (
                <ExpenseItem expense={expense} key={index}/>
            ))}
        </div>
    )
}