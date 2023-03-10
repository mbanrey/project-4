import { useState } from "react";
import * as expenseAPI from '../../utilities/expenses-api'

export default function EditIncome({expense, setExpenses}) {
    const [editExpense, setEditExpense]= useState({
        name: expense.name,
        category: expense.category,
        amount: expense.amount,
        date: expense.date
    }) 

    function handleChange(event) {
        setEditExpense({
            ...editExpense,
            [event.target.name]: event.target.value
        })
    }

    async function handleDelete(event) {
        event.preventDefault()

        //Remove from DB
        const expenses = await expenseAPI.remove(expense._id)
        setExpenses(expenses)
    }

    async function handleUpdate(event) {
        event.preventDefault()
        //Add to the DB
        const editedExpense = {
            name: editExpense.name,
            category: editExpense.category,
            amount: editExpense.amount,
            date: editExpense.date
        }
        const expenses = await expenseAPI.update(expense._id,editedExpense)
    

        // //reset form data
        setEditExpense(
            {
            name: expense.name,
            category: expense.category,
            amount: expense.amount,
            date: expense.date
            }
        )
        setExpenses(expenses)
    }
    return(
        <form>
            <label>Name</label>
            <input 
                onChange={handleChange}
                type='text'
                name='name'
                placeholder='name'
                value={editExpense.name}    
            />
            <label>Category</label>
            <select onChange={handleChange} value={editExpense.category} name='category'>
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
                value={editExpense.amount}    
            />
            <label>Date</label>
            <input 
                onChange={handleChange}
                type='date'
                name='date'
                placeholder='date'
                value={editExpense.date}
            />
            <button 
            onClick={handleUpdate}>
                Update Expense
                </button>
            <button 
            onClick={handleDelete}>
                Delete Expense
                </button>
        </form>
    )
}