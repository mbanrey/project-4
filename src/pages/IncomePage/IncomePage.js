import IncomeList from '../../components/IncomeList/IncomeList'

export default function IncomePage({userIncome}) {
    return(
        <div>
            <IncomeList incomeArray={userIncome}/>
        </div>
    )
}