import React from 'react'

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    h3: {
      fontSize: "20px",
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      margin: "0 0 0 0",
      textAlign: "center",
    },
    first:{
        background: 'rgba(0, 151, 19, 0.1)'
    },
    second:{
        background: 'rgba(0, 151, 19, 0.3)'
    },
    third:{
        background: 'rgba(0, 151, 19, 0.9)'
    },
  }));

const Test = () => {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.first}>
            <p>This paragraph is shown at 10% opacity.</p></div>
        <div className={classes.second}>
            <p>This paragraph is shown at 30% opacity.</p></div>
        <div className={classes.third}>
            <p>This paragraph is shown at 60% opacity.</p></div>
        <div><p>This is default.</p></div>
        </div>
    )
}

export default Test
