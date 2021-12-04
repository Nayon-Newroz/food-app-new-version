import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import FilterIcon from "../assets/images/FilterIcon.svg";
import burgerBanner from "../assets/images/burgerBanner.svg";
import cardFoodImage from "../assets/images/cardFoodImage.png";
import exploreActive from "../assets/images/exploreActive.svg";
import menu from "../assets/images/menu.svg";
import offers from "../assets/images/offers.svg";
import Recommendations from "../assets/images/Recommendations.svg";
import restaurantImage from "../assets/images/restaurantImage.png";
import dineIn from "../assets/images/dineIn.svg";
import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/LocationIcon.svg";
import Search from "../assets/images/Search.png";
import searchIcon3 from "../assets/images/searchIcon3.png";
import personIcon from "../assets/images/personIcon.png";
import user4 from "../assets/images/user4.png";
import arrowDown from "../assets/images/arrowDown.png";
import clubPassLogo from "../assets/images/clubPassLogo.png";
import clubPassIcon from "../assets/images/clubPassIcon.png";
import square from "../assets/images/square.svg";
import menuIcon from "../assets/images/menuIcon.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";
import RestaurantItemCorousel from "./partial/RestaurantItemCorousel";
import RecommendationItemCarousel from "./partial/RecommendationItemCarousel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DineInDetailCorousel from "./partial/DineInDetailCorousel";
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
  itemText: {
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  menuItem: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "13px 0",
    color: "#666E7A",
    // cursor:'pointer',
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
  iconButtonStyle2: {
    color: "#666E7A !important",
    border: "1px solid #E5E5E5 !important",
    borderRadius: "25px !important",
    fontSize: "13px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "400 !important",
    ["& .MuiButton-startIcon"]: {
      marginRight: "2px !important",
    },
  },
  backgroundStyle: {
    backgroundImage: `url(${restaurantImage})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  backgroundStyle2: {
    backgroundImage: `url(${burgerBanner})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  menuStyle: {
    height: "70px",
    background: "#fff",
    borderRadius: "16px 16px 0px 0px",
    position: "absolute",
    bottom: 0,
    boxShadow: "rgb(17 17 26 / 10%) 0px 4px 12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuStyle2: {
    height: "50px",
    // background: "#fff",
    // borderRadius: "16px 16px 0px 0px",

    bottom: 0,
    boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
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
      fontWeight: 600,
    },
    ["& h4"]: {
      color: "#272D2F",
      fontWeight: 600,
    },

    borderBottom: "2px solid #272D2F",
  },

  buttonStyle: {
    background: "#272D2F !important",
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  cardContainer: {
    borderBottom: "2px solid #F2EFEF",
    "&:last-child": {
      borderBottom: "2px solid rgba(0,0,0,0)",
    },
  },
  inputStyle: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 4px",
  },
  container2SidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  container2SidePaddingAndMargin: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
    paddingTop: "15px !important",
    paddingBottom: "15px !important",
    // margin: "15px auto !important",
  },
  containerLeftSidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "0px !important",
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
}));

const OrderPage = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Deals");
  const fnActive = (id) => {
    // setActive(id);
    var elmntToView1 = document.getElementById("menu");
    elmntToView1.scrollIntoView({
      behavior: "smooth",
    });

    const yOffset = -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   let sectionsDetail = [];

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop - 90;
  //     let sectionId = section.getAttribute("id");

  //     sectionsDetail.push({ id: sectionId, top: sectionTop });
  //     // console.log("sectionTop", sectionTop, sectionTop-90);
  //     // const sectionHeight = section.clientHeight;
  //     // console.log("sectionHeight", sectionHeight);
  //   });

  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY;

  //     let sectionId;

  //     if (scrollCheck >= sectionsDetail[0].top) {
  //       sectionsDetail.forEach((element, index) => {
  //         if (scrollCheck >= element.top) {
  //           sectionId = element.id;
  //         }
  //       });
  //     }

  //     if (typeof sectionId === "undefined") {
  //       setActive("Deals");
  //     } else {
  //       setActive(sectionId);
  //     }
  //   });
  // }, []);

  return (
    <div style={{ backgroundColor: "#F3F3F3" }}>
      <div style={{ marginBottom: "10px", backgroundColor: "#fff" }}>
        <Container
          maxWidth="xs"
          style={{
            padding: "15px 20px 0 20px",
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
                  <div
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      marginTop: "4px",
                    }}
                    className={classes.h5}
                  >
                    Blue Ocean Tower, 40 kemal Atatu...
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
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
          <Box sx={{ margin: "25px 0px" }}>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Search posts, dishes etc"
                // value={values.password}
                // onChange={handleChange('password')}
                // className={classes.inputStyle}
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
          </Box>
        </Container>

        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <Box sx={{ margin: "25px 0px" }}>
            <RestaurantCorousel />
          </Box>
        </Container>




        <Container
          maxWidth="xs"
          style={{
            padding: "15px 0px 15px 20px",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <DineInDetailCorousel2 />
          </div>
        </Container>

        <Container
          maxWidth="xs"
          style={{
            padding: "15px 20px 15px 20px",
          }}
        >
          <div
            style={{
              border: "1px solid #EEEEEE",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
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
                  style={{
                    background: "#FD0061",
                    textTransform: "none",
                    padding: "2px 12px",
                    margin: "12px auto 0 auto",
                    display: "block",
                  }}
                  disableElevation
                >
                  Join Now
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div style={{ marginBottom: "10px", backgroundColor: "#fff" }}>
        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <Box sx={{ paddingTop: "15px" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <h3 className={classes.h3}>Offers</h3>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Button
                  className={classes.buttonTextStyle}
                  endIcon={<img src={arrowRight} alt="" />}
                >
                  See all
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
          style={{
            overflow: "hidden",
          }}
        >
          <OfferCorousel />
        </Container>
      </div>
      <div style={{ marginBottom: "10px", backgroundColor: "#fff" }}>
        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <Box sx={{ padding: "25px 0 10px 0" }}>
            <label className={classes.h3}>Updates</label>&nbsp;&nbsp;
            <label
              className={classes.h4}
              style={{ color: "#666E7A", fontWeight: 400 }}
            >
              2.3K Posts
            </label>
          </Box>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
          style={{
            overflow: "hidden",
          }}
        >
          <UpdateAndReviewCarousel />
        </Container>
      </div>
      <div style={{ marginBottom: "10px", backgroundColor: "#fff" }}>
        <Container maxWidth="xs" className={classes.container2SidePadding}>
          <Box sx={{ padding: "25px 0 10px 0" }}>
            <label className={classes.h3}>Reviews & Recommendations</label>
          </Box>
        </Container>
        <Container
          maxWidth="xs"
          className={classes.container2SidePaddingAndMargin}
          style={{
            overflow: "hidden",
          }}
        >
          <UpdateAndReviewCarousel />
        </Container>
      </div>
    </div>
  );
};

export default OrderPage;
