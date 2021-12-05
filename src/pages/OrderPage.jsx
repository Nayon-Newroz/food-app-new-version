import React from "react";
import Container from "@mui/material/Container";
// import FilterIcon from "../assets/images/FilterIcon.svg";
// import burgerBanner from "../assets/images/burgerBanner.svg";
// import cardFoodImage from "../assets/images/cardFoodImage.png";
// import exploreActive from "../assets/images/exploreActive.svg";
// import menu from "../assets/images/menu.svg";
// import offers from "../assets/images/offers.svg";
// import Recommendations from "../assets/images/Recommendations.svg";
// import restaurantImage from "../assets/images/restaurantImage.png";
// import dineIn from "../assets/images/dineIn.svg";
// import locationIcon from "../assets/images/LocationIcon.svg";
// import Search from "../assets/images/Search.png";
// import personIcon from "../assets/images/personIcon.png";
// import arrowDown from "../assets/images/arrowDown.png";
// import square from "../assets/images/square.svg";
// import menuIcon from "../assets/images/menuIcon.svg";
// import Box from "@mui/material/Box";
// import AddIcon from "@mui/icons-material/Add";
import logo from "../assets/images/logo.svg";
import searchIcon3 from "../assets/images/searchIcon3.png";
import user4 from "../assets/images/user4.png";
import clubPassLogo from "../assets/images/clubPassLogo.png";
import clubPassIcon from "../assets/images/clubPassIcon.png";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles"; 
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl"; 
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import backArrow from "../assets/images/backArrow.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import DineInDetailCorousel2 from "./partial/DineInDetailCorousel2";
import OfferCorousel from "./partial/OfferCorousel";
import UpdateAndReviewCarousel from "./partial/UpdateAndReviewCarousel";
import RestaurantCorousel from "./partial/RestaurantCorousel";

const useStyles = makeStyles((theme) => ({
  h3: {
    fontSize: "18px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#272D2F",
  },
  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    margin: 0,
    color: "#140205",
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#666E7A",
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  main: {
    marginBottom: "10px",
    backgroundColor: "#fff",
    padding: "15px 0",
  },

  logoStyle: {
    // height: "45px",
    width: "100%",
    // paddingRight: "10px",
    display: "inherit",
  },
  logoStyle2: {
    display: "block",
    margin: "auto",
  },
  imageStyle: {
    padding: "5px",
    border: "1px solid #F2F2F2",
    borderRadius: "5px",
    display: "block",
    marginLeft: "auto",
  },

  iconButtonStyle: {
    color: "#272D2F !important",
    border: "none !important",
    paddingLeft: "4px !important",
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "600 !important",

    [theme.breakpoints.down(411)]: {
      fontSize: "13px !important",
    },
  },

  buttonStyle: {
    background: "#FD0061",
    textTransform: "none",
    padding: "2px 12px",
    margin: "12px auto 0 auto",
    display: "block",
    "&:hover": { background: "#FD0061" },
    [theme.breakpoints.down(420)]: {
      fontSize: "11px",
    },
  },

  container2SidePadding: {
    padding: "20px 20px 0 20px !important",
  },
  container2SidePaddingAndMargin: {
    padding: "15px 20px 0 20px !important",
    overflow: "hidden",
  },

  customBadge: {
    backgroundColor: "#008000",
    color: "white",
    position: "absolute",
    top: 6,
    right: 8,
    minWidth: "12px",
    minHeight: "12px",
    borderRadius: "50%",
  },
  sizeAvatar: {
    height: "50px",
    width: "50px",
  },
  buttonTextStyle: {
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    margin: 0,
    fontWeight: "400 !important",
    color: "#666E7A !important",
    textTransform: "none !important",
    ["& .MuiButton-endIcon"]: {
      marginLeft: "0px",
    },
  },
  ellipsisStyle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: "4px",
  },
  card: {
    border: "1px solid #EEEEEE",
    padding: "12px 20px",
    borderRadius: "10px",
  },
  rightAlign: {
    textAlign: "right",
  },
  ContainerPadding: {
    padding: "10px 20px !important",
  },
}));

const OrderPage = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#F3F3F3" }}>
      <div className={classes.main}>
        <Container
          maxWidth="xs"
          style={{
            padding: "0 20px",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={1.5}>
              <IconButton
              // onClick={toggleDrawer(anchor, false)}
              // className={classes.iconButtonStyle}
              >
                <img src={backArrow} alt="" />
              </IconButton>
            </Grid>
            <Grid item xs={8.5}>
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  <img src={logo} alt="" className={classes.logoStyle} />
                </Grid>
                <Grid item xs={10} style={{ paddingLeft: "10px" }}>
                  <div>
                    <label className={classes.h5} style={{ fontWeight: 500 }}>
                      DINE-IN
                    </label>
                    &nbsp; &nbsp;
                    <label className={classes.h4}>KFC-Banani</label>
                  </div>
                  <div className={`${classes.h5} ${classes.ellipsisStyle}`}>
                    Blue Ocean Tower, 40 kemal Atatu...
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} className={classes.rightAlign}>
              <Badge classes={{ badge: classes.customBadge }} variant="dot">
                <Avatar
                  alt="Remy Sharp"
                  src={user4}
                  className={classes.sizeAvatar}
                />
              </Badge>
              {/* <img src={square} alt="" className={classes.imageStyle} /> */}
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              placeholder="Search posts, dishes etc"
              // value={values.password}
              // onChange={handleChange('password')}

              style={{
                borderRadius: "50px",
                paddingRight: "20px",
                paddingLeft: "7px",
                fontSize: "16px",
                color: "#666E7A",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img
                      src={searchIcon3}
                      alt=""
                      style={{ marginRight: "10px", paddingLeft: "4px" }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>

        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <RestaurantCorousel />
        </Container>

        <Container
          maxWidth="xs"
          style={{
            padding: "25px 0px 0px 20px",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <DineInDetailCorousel2 />
          </div>
        </Container>

        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <div className={classes.card}>
            <Grid container alignItems="flex-start">
              <Grid item xs={9}>
                <img src={clubPassLogo} alt="" />
                <h5
                  className={classes.h5}
                  style={{ lineHeight: "20px", marginTop: "10px" }}
                >
                  Join Dinemate ClubPass & <br />
                  get amazing Deals
                </h5>
              </Grid>
              <Grid item xs={3}>
                <img src={clubPassIcon} alt="" className={classes.logoStyle2} />
                <Button
                  variant="contained"
                  disableElevation
                  className={classes.buttonStyle}
                >
                  Join Now
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div className={classes.main}>
        <Container maxWidth="xs" style={{ padding: "0 20px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h3 className={classes.h3}>Offers</h3>
            </Grid>
            <Grid item xs={6} className={classes.rightAlign}>
              <Button
                className={classes.buttonTextStyle}
                endIcon={<img src={arrowRight} alt="" />}
              >
                See all
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
        >
          <OfferCorousel />
        </Container>
      </div>
      <div className={classes.main}>
        <Container maxWidth="xs" className={classes.ContainerPadding}>
          <label className={classes.h3}>Updates</label>&nbsp;&nbsp;
          <label
            className={classes.h4}
            style={{ color: "#666E7A", fontWeight: 400 }}
          >
            2.3K Posts
          </label>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
        >
          <UpdateAndReviewCarousel />
        </Container>
      </div>
      <div className={classes.main}>
        <Container maxWidth="xs" className={classes.ContainerPadding}>
          <label className={classes.h3}>Reviews & Recommendations</label>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
        >
          <UpdateAndReviewCarousel />
        </Container>
      </div>
    </div>
  );
};

export default OrderPage;
