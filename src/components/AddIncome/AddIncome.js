import { useState } from "react"
import * as incomeAPI from '../../utilities/'

export default function AddIncome() {

    const intialData = {
        catergory: 'New Income',
        amount: 0,
        date: Date.now
    }

    const [newIncome, setNewIncome]= useState(intialData)

    function handleChange(event) {
        setNewIncome({
            ...newIncome,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateIngredient(event) {
        event.preventDefault()

        //Add to the DB
        await ingredientsAPI.create(newIncome)

        //reset form data
        setNewIncome(intialData)
    }
}