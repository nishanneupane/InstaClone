import React, { Component } from 'react'
import "./SignUp.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            name: null,
            userName: null,
            password: null

        }


    }

    newSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                const user = userCredential.user;

                let payload={
                    "userId": "22001",
                    "userName": this.state.userName,
                    "name": this.state.name,
                    "profileImage": "han.png"
                }
                
                const requestOptions = {
                    method: "POST",
                    headers: { 'ContentType': "application/json" },
                    body: JSON.stringify(payload)
                }
                fetch("http://localhost:8080/users", requestOptions)
                    .then(response => response.json())
                    .then(data => {

                    })
                    .catch(error => {

                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ...
            });
    }

    render() {
        return (
            <div>
                <input className="loginpage_text" type="text" onChange={(event) => { this.setState({ emailId: event.currentTarget.value }) }} placeholder="Phone number, Mobile Number, or email" />
                <input className="loginpage_text" type="text" onChange={(event) => { this.state.name = event.currentTarget.value }} placeholder="Full Name" />
                <input className="loginpage_text" type="text" onChange={(event) => { this.state.userName = event.currentTarget.value }} placeholder="Username" />
                <input className="loginpage_text" type="password" onChange={(event) => { this.state.password = event.currentTarget.value }} placeholder="Password" />
                <button className="loginpage_button" onClick={this.newSignUp}>Sign Up</button>
            </div>

        );
    }
}
export default SignUp;