import IncomeItem from '../IncomeItem/IncomeItem'

export default function IncomeList({incomeArray}) {
    return(
        <div>
            {incomeArray && incomeArray.map((income, index) => (
                <IncomeItem income={income} key={index}/>
            ))}
        </div>
    )
}