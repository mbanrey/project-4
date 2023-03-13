import IncomeItem from '../IncomeItem/IncomeItem'
import './IncomeList.css'

export default function IncomeList({incomeArray, setIncome}) {
    return(
        <div className='income-list'>
            <div className="expense-item-description">
            <p className="flex-item">Category</p>
            <p className="flex-item">Amount</p>
            </div>
            {incomeArray && incomeArray.map((income, index) => (
                <IncomeItem setIncome={setIncome} income={income} key={index}/>
            ))}
        </div>
    )
}