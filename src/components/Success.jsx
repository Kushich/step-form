import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export default function Success() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm User Data"/>
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
      </React.Fragment>
    </MuiThemeProvider>
  )
}