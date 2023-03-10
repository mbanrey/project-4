import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({setUser, setIncome, setExpenses}) {
    return (
        <>
            <h2>AuthPage</h2>
            <SignUpForm setUser={setUser}/>
            <LoginForm setExpenses={setExpenses} setIncome={setIncome} setUser={setUser}/>
        </>
    )
}