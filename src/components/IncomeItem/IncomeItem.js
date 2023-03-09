export default function IncomeItem({income}) {
    return(
        <div>
            <p>{income.category}</p>
            <p>{income.amount}</p>
        </div>
    )
}