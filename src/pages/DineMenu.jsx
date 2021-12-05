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
// import personIcon from "../assets/images/personIcon.png";
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

const useStyles = makeStyles((theme) => ({
  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 500,
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
    paddingRight: "10px",
    display: "inherit",
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
    margin: "15px auto !important",
  },
  containerLeftSidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "0px !important",
  },
}));

const DineMenu = () => {
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

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let sectionsDetail = [];

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90;
      let sectionId = section.getAttribute("id");

      sectionsDetail.push({ id: sectionId, top: sectionTop });
      // console.log("sectionTop", sectionTop, sectionTop-90);
      // const sectionHeight = section.clientHeight;
      // console.log("sectionHeight", sectionHeight);
    });

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;

      let sectionId;

      if (scrollCheck >= sectionsDetail[0].top) {
        sectionsDetail.forEach((element, index) => {
          if (scrollCheck >= element.top) {
            sectionId = element.id;
          }
        });
      }

      if (typeof sectionId === "undefined") {
        setActive("Deals");
      } else {
        setActive(sectionId);
      }
    });
  }, []);
  // useEffect(() => {
  //   setActive("Deals");
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img src={logo} alt="" className={classes.logoStyle} />
              </Grid>
              <Grid item xs={10}>
                <h4 className={classes.h4}>KFC-Banani</h4>
                <Grid container alignItems="center">
                  <Grid item xs={0.5}>
                    <img
                      src={locationIcon}
                      alt=""
                      style={{ display: "block", marginRight: "4px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={11.5}
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                    className={classes.p}
                  >
                    &nbsp; Blue Ocean Tower, 40 kemal Atatu...
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <img src={square} alt="" className={classes.imageStyle} />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 0px 15px 20px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Button
              disableRipple={true}
              variant="outlined"
              startIcon={<img src={dineIn} alt="" />}
              endIcon={<img src={arrowDown} alt="" />}
              className={classes.iconButtonStyle}
            >
              Dine-In
            </Button>
            &nbsp;
          </Grid>
          <Grid item xs={8} style={{ overflow: "hidden" }}>
            <DineInDetailCorousel />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          height: "250px",
        }}
        className={classes.backgroundStyle}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle}
        >
          <Grid item className={`${classes.itemStyle} ${classes.active}`}>
            <img src={exploreActive} alt="" className={classes.centerIcon} />
            <p className={`${classes.itemText}`}>Explore</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={Recommendations} alt="" className={classes.centerIcon} />
            <p className={classes.itemText}>Recommendations</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={offers} alt="" className={classes.centerIcon} />
            <p className={classes.itemText}>Offers</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={menu} alt="" className={classes.centerIcon} />
            <p className={classes.itemText}>Menu</p>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xs" className={classes.container2SidePadding}>
        <Box sx={{ margin: "25px 0px" }}>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              placeholder="Search"
              // value={values.password}
              // onChange={handleChange('password')}
              className={classes.inputStyle}
              style={{
                borderRadius: "12px",
                paddingRight: "20px",
                paddingLeft: "7px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img src={Search} alt="" style={{ marginRight: "10px" }} />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img src={FilterIcon} alt="" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Container>
      <Container maxWidth="xs" className={classes.container2SidePadding}>
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h5 className={classes.h5}>#KFC #KFCbd</h5>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.p} style={{ textAlign: "right" }}>
                255 Post
              </p>
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
        <RestaurantItemCorousel />
      </Container>
      <Container maxWidth="xs" className={classes.container2SidePadding}>
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h4 className={classes.h4} style={{ fontWeight: 600 }}>
                Recommendations
              </h4>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.p} style={{ textAlign: "right" }}>
                98 Dishes
              </p>
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
        <RecommendationItemCarousel />
      </Container>
      <Container
        maxWidth="xs"
        className={classes.container2SidePaddingAndMargin}
      >
        <div>
          <img src={burgerBanner} alt="" width="100%" height="100%" />
        </div>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "15px auto",
          position: "sticky ",
          top: 0,
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
          <Grid
            item
            // className={`${classes.itemStyle}`}
            style={{ width: "0px" }}
          >
            <img
              src={menuIcon}
              alt=""
              style={{ display: "block", height: "20px", marginTop: "2px" }}
            />
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "Deals" ? classes.active : null
            }`}
            onClick={() => fnActive("Deals")}
          >
            <h4 className={`${classes.menuItem}`}>Deals</h4>
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
          </Grid>
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
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    // width="100%"
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "#272D2F" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
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
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div className={classes.cardContainer} key={i}>
              <Grid
                container
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "#272D2F" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
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
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    // width="100%"
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "#272D2F" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
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
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "#272D2F" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "#272D2F", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
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

export default DineMenu;
