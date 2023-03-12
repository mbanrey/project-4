import AddIncome from '../../components/AddIncome/AddIncome'
import IncomeList from '../../components/IncomeList/IncomeList'

export default function IncomePage({userIncome, setIncome}) {
    return(
        <div className='income-page'>
            <IncomeList setIncome={setIncome} incomeArray={userIncome}/>
            <AddIncome setIncome={setIncome} />
        </div>
    )
}