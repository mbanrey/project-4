import ExpenseList from '../../components/ExpenseList/ExpenseList'
import AddExpense from '../../components/AddExpense/AddExpense'

export default function ExpensePage({userExpenses, setExpenses}) {

    return(
        <div>
            <ExpenseList setExpenses={setExpenses} expenses={userExpenses}/> 
            <AddExpense setExpenses={setExpenses}/>
        </div>
    )
}