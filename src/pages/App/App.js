import { useState } from "react"
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

  return (
    <main className="App">
      { user ? (
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/home" element={<HomePage userExpenses={user.expenses}/>} />
            <Route path="/income" element={<IncomePage userIncome={user.income}/>} />
            <Route path="/expenses" element={<ExpensePage userExpenses={user.expenses}/>} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </> 
         ):(
        <AuthPage setUser={setUser}/>
      )} 
    </main>
  );
}

export default App;
