import { useState } from "react";
import * as incomeAPI from '../../utilities/income-api'

export default function EditIncome() {
    const [editIncome, setEditIncome]= useState({
        category: income.category,
        amount: income.amount,
        date: income.date
    }) 

    function handleChange(event) {
        setEditIncome({
            ...editIncome,
            [event.target.name]: event.target.value
        })
    }

    async function handleDelete(event) {
        event.preventDefault()

        //Remove from DB
        await incomeAPI.remove(income._id)
    }

    async function handleUpdate(event) {
        event.preventDefault()
        //Add to the DB
        const editedIncome = {
            category: editIncome.category,
            amount: editIncome.amount,
            date: editIncome.date
        }
        const incomes = await incomeAPI.update(income._id,editedIncome)
    

        // //reset form data
        setEditIncome(
            {
            category: income.category,
            amount: income.amount,
            date: income.date
            }
        )
    }
    return(
        <form>
            <label>Category</label>
            <select onChange={handleChange} value={editIncome.category} name='category'>
                <option value='food'>food</option>
                <option value='gas'>gas</option>
                <option value='bills'>bills</option>
            </select>
            <label>Amount</label>
            <input 
                onChange={handleChange}
                type='number'
                name='amount'
                placeholder='amount'
                value={editIncome.amount}    
            />
            <label>Date</label>
            <input 
                onChange={handleChange}
                type='date'
                name='date'
                placeholder='date'
                value={editIncome.date}
            />
            <button 
            onClick={handleUpdate}>
                Update Income
                </button>
            <button 
            onClick={handleDelete}>
                Delete Income
                </button>
        </form>
    )
}