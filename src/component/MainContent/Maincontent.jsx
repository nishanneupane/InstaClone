import React from 'react'
import "./Maincontent.css"
import { Grid } from '@mui/material'
import Statusbar from '../StatusBar/Statusbar'
import Mainpage from '../MainPage/Mainpage'
import Info from '../Info/Info'
import Suggestion from '../Suggestion/Suggestion'

const Maincontent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <div>
            <Statusbar />
            <Mainpage />
          </div>
        </Grid>
        <Grid item xs={2}>
          <Info />
          <Suggestion/>
        </Grid>
        <Grid item xs={2}></Grid>

      </Grid>
    </div>
  )
}

export default Maincontent