import { useState } from "react"
import * as incomeAPI from '../../utilities/income-api'

export default function AddIncome() {

    const intialData = {
        category: 'New Income',
        amount: 0,
        date: Date.now()
    }

    const [newIncome, setNewIncome]= useState(intialData)

    function handleChange(event) {
        setNewIncome({
            ...newIncome,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateIncome(event) {
        event.preventDefault()

        //Add to the DB
        const incomes = await incomeAPI.create(newIncome)
    

        //reset form data
        setNewIncome(incomes)
    }

    return(
        <form >
            <label>Category</label>
            <select name='category'>
                <options value='food'>food</options>
                <options value='gas'>gas</options>
                <options value='bills'>bills</options>
            </select>
            <label>Amount</label>
            <input 
                type='number'
                name='amount'
                placeholder='amount'
                value={newIncome.amount}    
            />
            <label>Date</label>
            <input 
                type='date'
                name='date'
                placeholder='date'
                value={newIncome.date}
            />
            <button 
            onclick={handleCreateIncome}>
                Add Income
                </button>
        </form>
    )
}