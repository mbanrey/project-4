import ExpenseItem from "../ExpenseItem/ExpenseItem"

export default function ExpenseList({expenses, setExpense}) {
    return(
        <div className="expense-list">
            {expenses && expenses.map((expense, index) => (
                <ExpenseItem setExpense={setExpense} expense={expense} key={index}/>
            ))}
        </div>
    )
}