import IncomeItem from '../IncomeItem/IncomeItem'

export default function IncomeList({incomeArray, setIncome}) {
    return(
        <div>
            {incomeArray && incomeArray.map((income, index) => (
                <IncomeItem setIncome={setIncome} income={income} key={index}/>
            ))}
        </div>
    )
}