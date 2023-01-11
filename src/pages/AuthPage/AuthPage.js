// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage(props){
    return(
        <>
        <div className="authpic">
            <h3 className="form-container">Login/ Sign-up</h3>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
        </div>
        </>
    )
}