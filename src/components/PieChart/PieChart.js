import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import{ Pie } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

// const  = ingredients.filter(ingredient => ingredient.isAvailable)



export default function PieChart({expenses}) {
    const labelMap = {
        'gas': 0,
        'bills': 1,
        'food': 2,
        'vehicle': 3,
        'entertainment': 4,
        'travel': 5
    }


    const data = {
        labels: ['Gas', 'Bills', 'Food', 'Vehicle', 'Entertainment', 'Travel'],
        datasets: [
          {
            label: '# of Votes',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      for(let expense of expenses){
        data.datasets[0].data[labelMap[expense.category]] += expense.amount
      }

    return (
        <div className='pie'>
            <h1>Hello This is Pie</h1>

            <Pie data={data}/>
        </div>
    )
    
}