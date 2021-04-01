import React, { useContext } from 'react'
import {ThemeContext} from './App.js'




function FunctionalContext() {

    const dark= useContext(ThemeContext)
    const theme={
        backgroundColor: dark? 'white': 'black',
        color : dark? 'black': 'white'
      }
    return (
        <div style={theme}>
            makan siang
        </div>
    )
}

export default FunctionalContext
