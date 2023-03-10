import AddIncome from '../../components/AddIncome/AddIncome'
import IncomeList from '../../components/IncomeList/IncomeList'

export default function IncomePage({userIncome, setIncome}) {
    return(
        <div>
            <IncomeList setIncome={setIncome} incomeArray={userIncome}/>
            <AddIncome income={userIncome} setIncome={setIncome} />
        </div>
    )
}