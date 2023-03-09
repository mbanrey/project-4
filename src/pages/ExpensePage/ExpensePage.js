import ExpenseList from '../../components/ExpenseList/ExpenseList'

export default function ExpensePage({userExpenses, setExpenses}) {

    return(
        <ExpenseList setExpenses={setExpenses} expenses={userExpenses}/>      
    )
}