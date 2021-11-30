import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import exploreIcon from "../../assets/images/exploreIcon.svg";
import HomeIcon from "../../assets/images/HomeIcon.svg";
import WalletIcon from "../../assets/images/WalletIcon.svg";
import ClubPassIcon from "../../assets/images/ClubPassIcon.svg";
import dineIconAsh from "../../assets/images/dineIconAsh.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },

  menuStyle: {
    height: "80px",
    background: "#fff",
    borderRadius: "16px 16px 0px 0px",
    // position: "absolute",
    // bottom: 0,
    boxShadow: "rgb(17 17 26 / 10%) 0px -1px 12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  centerIcon: {
    display: "block",
    margin: "12px auto 7px auto",
  },
  itemStyle: {
    height: "100%",
    // padding: "0 10px",
    borderTop: "2px solid rgba(0,0,0,0)",
    borderBottom: "2px solid rgba(0,0,0,0)",
    cursor: "pointer",
  },
  active: {
    ["& p"]: {
      color: "#272D2F",
      fontWeight: 500,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          // height: "250px",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle}
        >
          <Grid item className={`${classes.itemStyle} ${classes.active}`}>
           
              <img src={HomeIcon} alt="" className={classes.centerIcon} />
              <p className={`${classes.p}`}>Home</p>
  
          </Grid>
          <Grid item className={`${classes.itemStyle}`}>
            <img src={exploreIcon} alt="" className={classes.centerIcon} />
            <p className={`${classes.p}`}>Explore</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
          <Link to="/menu" style={{textDecoration:'none'}}>
            <img src={dineIconAsh} alt="" className={classes.centerIcon} />
            <p className={classes.p}>Menu</p>
            </Link>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={ClubPassIcon} alt="" className={classes.centerIcon} />
            <p className={classes.p}>ClubPass</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={WalletIcon} alt="" className={classes.centerIcon} />
            <p className={classes.p}>Wallet</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
