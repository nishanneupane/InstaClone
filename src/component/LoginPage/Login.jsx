import { Grid } from "@mui/material";
import React, { Component } from "react";
import inst_image from "../../images/insta.jpg"
import inst_logo from "../../images/logoinsta.png"
import fb from "../../images/fb.png"
import appstore from "../../images/app.png"
import playstore from "../../images/play.png"
import "../LoginPage/Login.css"
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true 
        }
    }
    ChangeLogin=()=>{
        if(this.state.isLogin){
            this.setState({isLogin:false});
        }
        else{
            this.setState({isLogin:true});
        }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="600px" />
                            </div>

                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage_logo" src={inst_logo} />

                                    <div className="loginpage_signin">
                                        {
                                            this.state.isLogin ? <SignIn /> : <SignUp />
                                        }

                                        <div className="login_ordiv">
                                            <div className="login_dividor">
                                            </div>
                                            <div className="login_or">
                                                OR
                                            </div>
                                            <div className="login_dividor">
                                            </div>

                                        </div>

                                        <div>
                                            <div className="login_fb">
                                                <img className="login_fb_img" src={fb} width="15px" style={{ "marginRight": "5px" }} /> Login with Facebook</div>
                                            <div className="login_forgot">Forgot Password?</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="signup_option">
                                    {
                                        this.state.isLogin ?
                                            <div className="login_signin">Don't have an account ? <span style={{ "fontWeight": "bold", "color": "#0395F6" }} onClick={this.ChangeLogin}>Sign up</span></div>
                                            : <div className="login_signup">Have an account? <span style={{ "fontWeight": "bold", "color": "#0395F6" }} onClick={this.ChangeLogin}>Sign in</span></div>

                                    }



                                </div>

                                <div className="loginpage_downloadsection">
                                    <div>Get the app</div>
                                    <div className="loginpage_option">
                                        <img src={appstore} width="136px" className="loginpage_dwing" />
                                        <img src={playstore} width="136px" className="loginpage_dwing" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Login;