import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import pickUpIconBlack from "../assets/images/pickUpIconBlack.svg";
import pickUpIconWhite from "../assets/images/pickUpIconWhite.svg";
import dineIconWhite from "../assets/images/dineIconWhite.svg";
import dineIconBlack from "../assets/images/dineIconBlack.svg";

import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/LocationIcon.svg";
import square from "../assets/images/square.svg";
import backArrow from "../assets/images/backArrow.svg";
import clock from "../assets/images/clock.svg";

import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,
  },
  h3: {
    fontSize: "22px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "0 0 5px 0",
  },
  titleStyle: {
    fontSize: "20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "25px 0 20px 0",
    color: "#272D2F",
  },
  cardTitleStyle: {
    fontSize: "18px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0 0 0 0",
    color: "#272D2F",
    [theme.breakpoints.down(376)]: {
      fontSize: "16px",
    },
  },

  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: "0 0 5px 0",
    color: "#666E7A",
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#666E7A",
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
  },
  cardText: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#272D2F",
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#ffffff",
    margin: 0,
  },

  imageStyle: {
    display: "block",
    margin: "auto",
  },

  iconButtonStyle: {
    ["& .MuiTypography-root"]: {
      color: "#272D2F !important",
      paddingLeft: "4px !important",
      fontSize: "18px !important",
      fontFamily: "'Inter', sans-serif !important",
      fontWeight: "400 !important",
      // paddingLeft:'22px'

      // [theme.breakpoints.down(380)]: {
      //   fontSize: "15px !important",
      // },
    },
  },
  logoStyle: {
    // height: "45px",
    width: "100%",
    paddingRight: "10px",
    display: "inherit",
  },
  listItemStyle: {
    border: "1px solid #EEEEEE",
    borderRadius: "10px",
    background: "#fff",
    cursor: "pointer",
    marginBottom: "12px",
    "&:last-child": {
      marginBottom: "0px",
    },
  },

  listItemAvatarStyle: {
    minWidth: "30px  !important",
    marginRight: "5px",
  },

  card: {
    background: "#F2F3F7",
    padding: "12px",
    borderRadius: "4px",
  },
  active: {
    background: "#272D2F",
    color: "#ffffff !important",
  },

  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EEEEEE",
      borderRadius: "100px",
    },
  },
  selectStyle: {
    fontSize:'17px !important',
    color: "#666E7A !important",
    ["& .MuiSelect-icon"]: {
      right: "15px",
    },
    ["& .MuiOutlinedInput-input"]: {
      padding: "16.5px 20px",
    },
  },
  buttonStyle: {
    background: "#272D2F",
    padding: "15px",
    textAlign: "center",
    fontSize: "18px",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    borderRadius: "25px",
  },
  cardImage: {
    display: "block",
    width: "100%",
    paddingRight: "3px",
  },
  cardImage2: {
    display: "block",
    width: "100%",
    paddingRight: "3px",
    paddingTop: "2px",
  },
}));

const SetDine = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Dine In");
  const [place, setPlace] = useState("");
  const [tableNo, setTableNo] = useState();
  const [noOfGuest, setNoOfGuest] = useState();

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };
  const handleTableNo = (event) => {
    setTableNo(event.target.value);
  };
  const handleNoOfGuest = (event) => {
    setNoOfGuest(event.target.value);
  };

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div style={{ background: "#fff" }}>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px 5px 20px",
        }}
      >
        <p className={classes.titleStyle}>You are Dining at</p>
        <div
          style={{
            border: "1px solid #EEEEEE",
            padding: "12px 20px",
            borderRadius: "10px",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <img src={logo} alt="" className={classes.logoStyle} />
            </Grid>
            <Grid item xs={9}>
              <label
                className={classes.cardTitleStyle}
                style={{ fontWeight: "bold" }}
              >
                KFC-Banani
              </label>
              &nbsp;&nbsp; &nbsp;
              <label
                className={classes.p}
                style={{
                  background: "#007200",
                  padding: "5px 10px",
                  borderRadius: "2px",
                }}
              >
                Open Now
              </label>
              <Grid container alignItems="center" style={{ margin: "7px 0" }}>
                <Grid item xs={1}>
                  <img
                    src={locationIcon}
                    alt=""
                    className={classes.cardImage}
                  />
                </Grid>
                <Grid
                  item
                  xs={11}
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className={classes.h5}
                >
                  KFC Tower, 40 Kemal Ataturk...
                </Grid>
              </Grid>
              <Grid container alignItems="center" style={{ margin: "7px 0" }}>
                <Grid item xs={1}>
                  <img src={clock} alt="" className={classes.cardImage2} />
                </Grid>
                <Grid
                  item
                  xs={11}
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className={classes.h5}
                >
                  Serves in 5-10 Minutes
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px ",
        }}
      >
        <p className={classes.titleStyle}>Where are you seated?</p>

        <FormControl
          fullWidth
          classes={{ root: classes.customOutline }}
          style={{ marginBottom: "15px" }}
        >
          <InputLabel id="place">&nbsp;&nbsp;Hall or Floor</InputLabel>
          <Select
            className={classes.selectStyle}
            labelId="place-autowidth-label"
            id="place-autowidth"
            value={place}
            onChange={handlePlace}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={"Hall"}>Hall</MenuItem>
            <MenuItem value={"Floor"}>Floor</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          classes={{ root: classes.customOutline }}
          style={{ marginBottom: "15px" }}
        >
          <InputLabel id="tableNo">&nbsp;&nbsp;Table No</InputLabel>
          <Select
            className={classes.selectStyle}
            labelId="tableNo-autowidth-label"
            id="tableNo-autowidth"
            value={tableNo}
            onChange={handleTableNo}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={1}>001</MenuItem>
            <MenuItem value={2}>002</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth classes={{ root: classes.customOutline }}>
          <InputLabel id="noOfGuest">&nbsp;&nbsp;No of Guest</InputLabel>
          <Select
            className={classes.selectStyle}
            labelId="noOfGuest-autowidth-label"
            id="noOfGuest-autowidth"
            value={noOfGuest}
            onChange={handleNoOfGuest}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px ",
        }}
      >
        <Link to="/dine-menu" style={{ textDecoration: "none" }}>
          <div className={classes.buttonStyle}>Start Ordering</div>
        </Link>
      </Container>
    </div>
  );
};

export default SetDine;
