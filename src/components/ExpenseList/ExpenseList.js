import ExpenseItem from "../ExpenseItem/ExpenseItem"

export default function ExpenseList({expenses, setExpenses}) {
    return(
        <div className="expense-list">
            {expenses && expenses.map((expense, index) => (
                <ExpenseItem setExpenses={setExpenses} expense={expense} key={index}/>
            ))}
        </div>
    )
}