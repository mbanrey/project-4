import { useState } from "react"
import * as expenseAPI from '../../utilities/expenses-api'

export default function AddExpense() {

    const [newExpense, setNewExpense]= useState({
        name: '',
        category:'',
        amount: '',
        date: '',
        url:''
    })

    function handleChange(event) {
        setNewExpense({
            ...newExpense,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateExpense(event) {
        event.preventDefault()
        //Add to the DB
        const expense = {
            name: newExpense.name,
            category: newExpense.category,
            amount: newExpense.amount,
            date: newExpense.date,
            url: newExpense.url
        }
        const expenses = await expenseAPI.create(expense)
    

        // //reset form data
        setNewExpense(
            {
                name:'',
                category: '',
                amount: '',
                date: '',
                url:''
            }
        )
    }

    return(
        <form >
            <label>Name</label>
            <input 
                onChange={handleChange} 
                type='text'
                name='name'
                placeholder="name"
                value={newExpense.name} 
             />
            <label>Category</label>
            <select onChange={handleChange} value={newExpense.category} name='category'>
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
                value={newExpense.amount}    
            />
            <label>Date</label>
            <input 
                onChange={handleChange}
                type='date'
                name='date'
                placeholder='date'
                value={newExpense.date}
            />
            <label>Website</label>
            <input 
                onChange={handleChange} 
                type='text'
                name='url'
                placeholder="website"
                value={newExpense.url} 
             />
            <button 
            onClick={handleCreateExpense}>
                Add Expense
                </button>
        </form>
    )
}