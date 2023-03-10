import { useState } from "react"
import * as incomeAPI from '../../utilities/income-api'

export default function AddIncome({setIncome}) {

    const [newIncome, setNewIncome]= useState({
        category: 'job',
        amount: '',
        date: ''
    })

    function handleChange(event) {
        setNewIncome({
            ...newIncome,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateIncome(event) {
        event.preventDefault()
        //Add to the DB
        const income = {
            category: newIncome.category,
            amount: newIncome.amount,
            date: new Date((new Date(newIncome.date).getTime() + 86400000))
        }
        console.log(income)
        const incomes = await incomeAPI.create(income)
    

        // //reset form data
        setNewIncome(
            {
                category: '',
                amount: '',
                date: ''
            }
        )
        setIncome(incomes)
    }

    return(
        <form >
            <label>Category</label>
            <select onChange={handleChange} value={newIncome.category} name='category'>
                <option value='job'>Job</option>
                <option value='investments'>Investments</option>
                <option value='misc'>Misc</option>
            </select>
            <label>Amount</label>
            <input 
                onChange={handleChange}
                type='number'
                name='amount'
                placeholder='amount'
                value={newIncome.amount}    
            />
            <label>Date</label>
            <input 
                onChange={handleChange}
                type='date'
                name='date'
                placeholder='date'
                value={newIncome.date}
            />
            <button 
            onClick={handleCreateIncome}>
                Add Income
                </button>
        </form>
    )
}