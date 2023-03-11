import {
    Chart as ChartJS,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js/auto'

import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

ChartJS.register(
    LineElement,
    Tooltip,
    Legend
)


export default function LineGraph({ expenses, income }) {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [key, setKey] = useState(100)
    const [data, setData] = useState({
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
        datasets: [
        {
          label: 'Income',
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          borderColor: 'rgba(255, 99, 132, 0.8)',
          backgroundColor: 'rgba(255,0,0,.6)',
          yAxisID: 'y',
        },
        {
          label: 'Expenses',
          data: [0,0,0,0,0,0,0,0,0,0,0,0],
          borderColor: 'rgba(54, 162, 235, 0.8)',
          backgroundColor: 'rgba(0,0,255,.6)',
        }
      ]
    })

    useEffect(() => {
        const selectedYearsExpenses = expenses.filter(expense => {
          const date = new Date(expense.date)
          if(date.getFullYear() == selectedYear) {
            return expense
          }
        })
        const selectedYearsIncome = income.filter(income => {
          const date = new Date(income.date)
          if(date.getFullYear() == selectedYear) {
            return income
          }
        })
        let newData = [0,0,0,0,0,0,0,0,0,0,0,0]
        const newObj = data
        for(let income of selectedYearsIncome){
            const date = new Date(income.date)
          newData[date.getMonth()] += income.amount
        }
        newObj.datasets[0].data = newData 
        newData = [0,0,0,0,0,0,0,0,0,0,0,0]
        for(let expense of selectedYearsExpenses){
            const date = new Date(expense.date)
          newData[date.getMonth()] += expense.amount
        }
        newObj.datasets[1].data = newData 
        setData(newObj)
        setKey(prev => prev + 1)
      }, [selectedYear])
    
    function handleYearChange(e) {
        setSelectedYear(e.target.value)
      }

    return (
        <div className='line'>
            <h1>Expenses vs Income</h1>
            <label>Year</label>
            <select onChange={handleYearChange} value={selectedYear}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>

            <Line key={key} data={data} />
        </div>
    )

}