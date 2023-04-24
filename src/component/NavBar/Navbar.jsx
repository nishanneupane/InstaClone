import React from 'react'
import "./Navbar.css"
import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import insta_log from "../../images/logo.png"
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import find from "../../images/find.svg"
import react from "../../images/love.svg"
import profile_pic from "../../images/pp1.png"

const Navbar = () => {
  return (
    <div>
        <div className="navbar_barContent">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <img className="navbar_logo" src={insta_log} width="105px"/>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" placeholder="Search" className='navbar_Search'/>
                </Grid>

                <Grid item xs={3} style={{"display":"flex"}}>
                    <img className='navbar_img' src={home} width="25px"/>
                    <img className='navbar_img' src={message} width="25px"/>
                    <img className='navbar_img' src={find} width="25px"/>
                    <img className='navbar_img' src={react} width="25px"/>
                    <Avatar className='navbar_img' src={profile_pic} style={{"maxWidth":"25px","maxHeight":"25px"}}></Avatar>
                </Grid>

                <Grid item xs={1}>

                </Grid>

            </Grid>
        </div>
    </div>
  )
}

export default Navbar