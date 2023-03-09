import ExpenseList from '../../components/ExpenseList/ExpenseList'

export default function ExpensePage({userExpenses}) {

    return(
        <ExpenseList expenses={userExpenses}/>      
    )
}