import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FilterIcon from "../assets/images/FilterIcon.svg";
import burgerBanner from "../assets/images/burgerBanner.svg";
import cardFoodImage from "../assets/images/cardFoodImage.png";
import cardImage2 from "../assets/images/cardImage2.png";
import exploreActive from "../assets/images/exploreActive.svg";
import menu from "../assets/images/menu.svg";
import offers from "../assets/images/offers.svg";
import Recommendations from "../assets/images/Recommendations.svg";
import restaurantImage from "../assets/images/restaurantImage.png";
import dineIn from "../assets/images/dineIn.svg";
import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/LocationIcon.svg";
import searchIcon2 from "../assets/images/searchIcon2.svg";
import filterIcon2 from "../assets/images/filterIcon2.svg";
import menuIcon2 from "../assets/images/menuIcon2.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import Search from "../assets/images/Search.png";
import personIcon from "../assets/images/personIcon.png";
import arrowDown from "../assets/images/arrowDown.png";
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
import MenuRecommendedItemCarousel from "./partial/MenuRecommendedItemCarousel";
import MenuCarousel from "./partial/MenuCarousel";

const useStyles = makeStyles((theme) => ({
  h3: {
    fontSize: "20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    margin: "0 0 0 0",
    textAlign: "center",
  },
  h4: {
    fontSize: "18px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
  },
  h5: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif !important",
    margin: 0,
    fontWeight: 500,
    color: "272D2F",
  },

  h6: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    color: "#9E9E9E",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  buttonTextStyle: {
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    margin: 0,
    fontWeight: "400 !important",
    color: "#272D2F !important",
    textTransform: "none !important",
    ["& .MuiButton-endIcon"]: {
      marginLeft: "0px",
    },
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
    paddingRight: "10px",
    display: "inherit",
  },
  imageStyle: {
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
    color: "#fff !important",
    fontSize: "14px !important",
    fontWeight: 500,
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
    margin: "15px auto !important",
  },
  containerLeftSidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "0px !important",
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Deals");
  const [activeIndex, setActiveIndex] = useState(0);
  const fnActive = (id) => {
    // setActive(id);
    var elmntToView1 = document.getElementById("menu");
    elmntToView1.scrollIntoView({
      behavior: "smooth",
    });

    const yOffset = -120;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let sectionsDetail = [];

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 120;
      let sectionId = section.getAttribute("id");

      sectionsDetail.push({ id: sectionId, index: index, top: sectionTop });
      // console.log("sectionTop", sectionTop, sectionTop-90);
      // const sectionHeight = section.clientHeight;
      // console.log("sectionHeight", sectionHeight);
    });
    // console.log("sectionsDetail", sectionsDetail);

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;

      let sectionId;
      let sectionIndex;

      if (scrollCheck >= sectionsDetail[0].top) {
        sectionsDetail.forEach((element, index) => {
          if (scrollCheck >= element.top) {
            sectionId = element.id;
            sectionIndex = element.index;
          }
        });
      }

      if (typeof sectionId === "undefined") {
        setActive("Deals");
      } else {
        setActive(sectionId);
      }
      if (typeof sectionIndex === "undefined") {
        setActiveIndex(0);
        // console.log('sectionIndex undefined');
      } else {
        setActiveIndex(sectionIndex);
      }
    });
  }, []);
  // useEffect(() => {
  //   setActive("Deals");
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    // <div style={{ background: "#FAF9FB" }}>
    <div>
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px",

          position: "sticky ",
          top: 0,
          background: "#fff",
          zIndex: 20,
          height: "60px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <h3 className={classes.h3}>Menu</h3>
          </Grid>
          <Grid item xs={2}>
            <img src={searchIcon2} alt="" className={classes.imageStyle} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xs" className={classes.container2SidePadding}>
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h4 className={classes.h4}>Recommended</h4>
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
        <MenuRecommendedItemCarousel />
      </Container>

      <Container
        maxWidth="xs"
        className={classes.container2SidePaddingAndMargin}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={6}>
            <h4 className={classes.h4}>Menu</h4>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <img src={filterIcon2} alt="" className={classes.imageStyle} />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "15px auto",
          position: "sticky ",
          top: 59,
          background: "#fff",
          zIndex: 20,
        }}
        id="menu"
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle2}
        >
          <Grid item xs={1}>
            <img
              src={menuIcon2}
              alt=""
              style={{ display: "block", height: "20px", marginTop: "2px" }}
            />
          </Grid>
          <Grid item xs={11}>
            <MenuCarousel
              fnActive={fnActive}
              active={active}
              activeIndex={activeIndex}
            />
          </Grid>
          {/* <Grid
            item
            className={`${classes.itemStyle} ${
              active === "Deals" ? classes.active : null
            }`}
            onClick={() => fnActive("Deals")}
          >
            <p className={`${classes.menuItem}`}>Deals</p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "Popular" ? classes.active : null
            }`}
            onClick={() => fnActive("Popular")}
          >
            <p className={classes.menuItem}>Popular</p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "For One" ? classes.active : null
            }`}
            onClick={() => fnActive("For One")}
          >
            <p className={classes.menuItem}>For One</p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "For Sharing" ? classes.active : null
            }`}
            onClick={() => fnActive("For Sharing")}
          >
            <p className={classes.menuItem}>For Sharing</p>
          </Grid> */}
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        className={classes.container2SidePaddingAndMargin}
      >
        <section id="Deals">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Deals
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "110px", margin: "15px 0" }}
              >
                <Grid item xs={4} style={{ paddingRight: "15px" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img
                      src={cardImage2}
                      alt=""
                      // width="100%"
                      width="100%"
                      style={{ display: "block" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5
                    className={classes.h5}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Colonel recipe fried chicken
                  </h5>
                  <h6
                    className={classes.h6}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 150.00
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon fontSize="small" style={{ color: "#fff" }} />
                        <label>ADD</label>&nbsp;&nbsp;
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        className={classes.container2SidePaddingAndMargin}
      >
        <section id="Popular">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Popular
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "110px", margin: "15px 0" }}
              >
                <Grid item xs={4} style={{ paddingRight: "15px" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img
                      src={cardImage2}
                      alt=""
                      // width="100%"
                      width="100%"
                      style={{ display: "block" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5
                    className={classes.h5}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Colonel recipe fried chicken
                  </h5>
                  <h6
                    className={classes.h6}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 150.00
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon fontSize="small" style={{ color: "#fff" }} />
                        <label>ADD</label>&nbsp;&nbsp;
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
        }}
      >
        <section id="For One">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              For One
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "110px", margin: "15px 0" }}
              >
                <Grid item xs={4} style={{ paddingRight: "15px" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img
                      src={cardImage2}
                      alt=""
                      // width="100%"
                      width="100%"
                      style={{ display: "block" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5
                    className={classes.h5}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Colonel recipe fried chicken
                  </h5>
                  <h6
                    className={classes.h6}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 150.00
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon fontSize="small" style={{ color: "#fff" }} />
                        <label>ADD</label>&nbsp;&nbsp;
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        className={classes.container2SidePaddingAndMargin}
      >
        <section id="For Sharing">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              For Sharing
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "110px", margin: "15px 0" }}
              >
                <Grid item xs={4} style={{ paddingRight: "15px" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img
                      src={cardImage2}
                      alt=""
                      // width="100%"
                      width="100%"
                      style={{ display: "block" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5
                    className={classes.h5}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Colonel recipe fried chicken
                  </h5>
                  <h6
                    className={classes.h6}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 150.00
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon fontSize="small" style={{ color: "#fff" }} />
                        <label>ADD</label>&nbsp;&nbsp;
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Menu;
