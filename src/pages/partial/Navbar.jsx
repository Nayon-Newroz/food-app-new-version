import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import InactiveExploreIcon from "../../assets/images/InactiveExploreIcon.svg";
import ActiveHomeIcon from "../../assets/images/ActiveHomeIcon.svg";
import ActiveExploreIcon from "../../assets/images/ActiveExploreIcon.svg";
import ActiveDineIcon from "../../assets/images/ActiveDineIcon.svg";
import ActiveClubPassIcon from "../../assets/images/ActiveClubPassIcon.svg";
import InactiveHomeIcon from "../../assets/images/InactiveHomeIcon.svg";
import InactiveWalletIcon from "../../assets/images/InactiveWalletIcon.svg";
import InactiveClubPassIcon from "../../assets/images/InactiveClubPassIcon.svg";
import InactiveDineIcon from "../../assets/images/InactiveDineIcon.svg";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
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
    "& p": {
      color: "#272D2F",
      fontWeight: 500,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  let location = useLocation();
  let pathName = location.pathname;

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
          <Grid
            item
            className={`${classes.itemStyle}  ${
              pathName === "/home" ? classes.active : null
            }`}
          >
            <Link to="/home" style={{ textDecoration: "none" }}>
              <img
                src={pathName === "/home" ? ActiveHomeIcon : InactiveHomeIcon}
                alt=""
                className={classes.centerIcon}
              />
              <p className={`${classes.p}`}>Home</p>
            </Link>
          </Grid>
          <Grid item className={`${classes.itemStyle}`}>
            <img
              src={InactiveExploreIcon}
              alt=""
              className={classes.centerIcon}
            />
            <p className={`${classes.p}`}>Explore</p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle}  ${
              pathName === "/menu" ? classes.active : null
            }`}
          >
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <img
                src={pathName === "/menu" ? ActiveDineIcon : InactiveDineIcon}
                alt=""
                className={classes.centerIcon}
              />
              <p className={classes.p}>Menu</p>
            </Link>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img
              src={InactiveClubPassIcon}
              alt=""
              className={classes.centerIcon}
            />
            <p className={classes.p}>ClubPass</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img
              src={InactiveWalletIcon}
              alt=""
              className={classes.centerIcon}
            />
            <p className={classes.p}>Wallet</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
