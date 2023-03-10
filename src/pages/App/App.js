import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar";
import { getUser } from "../../utilities/users-service"
import HomePage from "../HomePage/HomePage";
import IncomePage from "../IncomePage/IncomePage";
import ExpensePage from "../ExpensePage/ExpensePage";

function App() {
  const [user, setUser] = useState(getUser())
  const [expenses, setExpenses] = useState([])
  const [income, setIncome] = useState([])


  return (
    <main className="App">
      { user ? (
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/home" element={<HomePage setExpenses={setExpenses} userExpenses={expenses}/>} />
            <Route path="/income" element={<IncomePage setIncome={setIncome} userIncome={income}/>} />
            <Route path="/expenses" element={<ExpensePage setExpenses={setExpenses} userExpenses={expenses}/>} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </> 
         ):(
        <AuthPage setExpenses={setExpenses} setIncome={setIncome} setUser={setUser}/>
      )} 
    </main>
  );
}

export default App;
