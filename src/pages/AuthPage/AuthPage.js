// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn"
import Landing from "../LandingPage/LandingPage"

export default function AuthPage(props){
    return(
        <>
        <div><Landing /></div>
        <div className="authpic">
            <h3 className="form-container">Login/ Sign-up</h3>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
            {/* <GoogleSignIn setUser={props.setUser} /> */}
        </div>
        </>
    )
}