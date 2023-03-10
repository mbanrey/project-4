import { useState } from "react"
import * as expenseAPI from '../../utilities/expenses-api'

export default function AddExpense({setExpenses}) {

    const [newExpense, setNewExpense]= useState({
        name: '',
        category:'food',
        amount: '',
        date: ''
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
            date: new Date((new Date(newExpense.date).getTime() + 86400000)),
        }
        const expenses = await expenseAPI.create(expense)
    

        // //reset form data
        setNewExpense(
            {
                name:'',
                category: 'food',
                amount: '',
                date: '',
            }
        )
        setExpenses(expenses)
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
                <option value='food'>Food</option>
                <option value='gas'>Gas</option>
                <option value='bills'>Bills</option>
                <option value='vehicle'>Vehicle</option>
                <option value='entertainment'>Entertainment</option>
                <option value='travel'>Travel</option>
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
            <button 
            onClick={handleCreateExpense}>
                Add Expense
                </button>
        </form>
    )
}