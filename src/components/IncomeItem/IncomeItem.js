export default function IncomeItem({income, setIncome}) {
    return(
        <div>
            <p>{income.category}</p>
            <p>{income.amount}</p>
        </div>
    )
}