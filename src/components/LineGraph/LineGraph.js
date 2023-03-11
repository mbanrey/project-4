// import {
//     Chart as ChartJS,
//     LineElement,
//     Tooltip,
//     Legend
// } from 'chart.js'

// import { Line } from 'react-chartjs-2'
// import { useState, useEffect } from 'react'

// ChartJS.register(
//     LineElement,
//     Tooltip,
//     Legend
// )


// export default function LineGraph({ expenses }) {
//     const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())


//     return (
//         <div className='line'>
//             <h1>Expenses vs Income</h1>
//             <label>Year</label>
//             <select onChange={handleYearChange} value={selectedYear}>
//                 <option value='2020'>2020</option>
//                 <option value='2021'>2021</option>
//                 <option value='2022'>2022</option>
//                 <option value='2023'>2023</option>
//             </select>

//             <Line key={key} data={data} />
//         </div>
//     )

// }