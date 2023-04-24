import React, { Component } from 'react'
import "../../component/LoginPage/Login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth,firestore} from "../Firebase"


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        }



    }

    Login = () => {
        // localStorage.setItem("users","admin");
        // window.location.reload();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    render() {
        return (
            <div>
                <input className="loginpage_text" onChange={(event) => { this.state.emailId = event.currentTarget.value }} type="text" placeholder="Phone number, username, or email" />
                <input className="loginpage_text" onChange={(event) => { this.state.password = event.currentTarget.value }} type="password" placeholder="Password" />
                <button className="loginpage_button" onClick={this.Login}>Log In</button>
            </div>

        );
    }
}
export default SignIn;