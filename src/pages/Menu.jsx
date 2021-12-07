import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import cardImage2 from "../assets/images/cardImage2.png";
import searchIcon2 from "../assets/images/searchIcon2.svg";
import filterIcon2 from "../assets/images/filterIcon2.svg";
import menuIcon2 from "../assets/images/menuIcon2.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";
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

  oldPrice: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    color: "#9E9E9E",
    margin: 0,
    fontWeight: 400,
    textDecoration: "line-through",
  },
  newPrice: {
    color: "#272D2F",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0, 
  },

  menuHeader: {
    padding: "15px 20px !important",
    position: "sticky ",
    top: 0,
    background: "#fff",
    zIndex: 20,
    height: "60px",
  },
  menuHeader2: {
    padding: "0 !important",
    margin: "15px auto",
    position: "sticky ",
    top: 59,
    background: "#fff",
    zIndex: 20,
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

  imageStyle: {
    display: "block",
    marginLeft: "auto",
  },

  menuStyle2: {
    height: "50px",
    bottom: 0,
    // boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderBottom: "2px solid #E5E5E5",
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

  cardWrapper: {
    borderBottom: "2px solid #F2EFEF",
    "&:last-child": {
      borderBottom: "2px solid rgba(0,0,0,0)",
    },
  },

  container2SidePadding: {
    padding: "0 20px !important",
  },
  containerPaddingStyle: {
    padding: "15px 20px !important",
  },
  rightAlign: {
    textAlign: "right",
  },
  iconColor: {
    color: "#fff !important",
  },
  cardInnerMargin: {
    marginBottom: "7px",
  },
  iconStyle: {
    display: "block",
    height: "20px",
    marginTop: "2px",
  },
  cardContainer: {
    height: "110px",
    margin: "15px 0",
  },
  cardImageDiv: {
    borderRadius: "10px",
    overflow: "hidden",
    height: "110px",
  },
  gridPadding: {
    paddingRight: "15px",
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Deals");
  const [activeIndex, setActiveIndex] = useState(0);
  const [reload, setReload] = useState(false);
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
        // console.log("sectionIndex undefined", reload);
       
      } else {
        setActiveIndex(sectionIndex);
        // console.log("sectionIndex ", sectionIndex, reload);
       
      }
    });
  }, []);
  // useEffect(() => {
  //   setActive("Deals");
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container maxWidth="xs" className={classes.menuHeader}>
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
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={6}>
            <h4 className={classes.h4}>Recommended</h4>
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
        className={classes.containerPaddingStyle}
        style={{
          overflow: "hidden",
        }}
      >
        <MenuRecommendedItemCarousel />
      </Container>

      <Container
        maxWidth="xs"
        style={{
          margin: "25px auto 15px",
        }}
        className={classes.container2SidePadding}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={6}>
            <h4 className={classes.h4}>Menu</h4>
          </Grid>
          <Grid item xs={6}>
            <img src={filterIcon2} alt="" className={classes.imageStyle} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xs" className={classes.menuHeader2} id="menu">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle2}
        >
          <Grid item xs={1}>
            <img src={menuIcon2} alt="" className={classes.iconStyle} />
          </Grid>
          <Grid item xs={11}>
            <MenuCarousel
              fnActive={fnActive}
              active={active}
              activeIndex={activeIndex}
              reload={reload}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xs" className={classes.containerPaddingStyle}>
        <section id="Deals">
          <Box sx={{ margin: "20px 0px 15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Deals
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardWrapper}>
              <Grid
                container
                alignItems="center"
                className={classes.cardContainer}
              >
                <Grid item xs={4} className={classes.gridPadding}>
                  <div className={classes.cardImageDiv}>
                    <img src={cardImage2} alt="" width="100%" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5 className={`${classes.h5} ${classes.cardInnerMargin}`}>
                    Colonel recipe fried chicken
                  </h5>
                  <h6 className={`${classes.h6} ${classes.cardInnerMargin}`}>
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                              className={classes.newPrice}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label className={classes.oldPrice}>Tk. 150.00</label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightAlign}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon
                          fontSize="small"
                          className={classes.iconColor}
                        />
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

      <Container maxWidth="xs" className={classes.containerPaddingStyle}>
        <section id="Popular">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Popular
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardWrapper}>
              <Grid
                container
                alignItems="center"
                className={classes.cardContainer}
              >
                <Grid item xs={4} className={classes.gridPadding}>
                  <div className={classes.cardImageDiv}>
                    <img src={cardImage2} alt="" width="100%" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5 className={`${classes.h5} ${classes.cardInnerMargin}`}>
                    Colonel recipe fried chicken
                  </h5>
                  <h6 className={`${classes.h6} ${classes.cardInnerMargin}`}>
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                               className={classes.newPrice}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label className={classes.oldPrice}>Tk. 150.00</label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightAlign}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon
                          fontSize="small"
                          className={classes.iconColor}
                        />
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
            <div key={i} className={classes.cardWrapper}>
              <Grid
                container
                alignItems="center"
                className={classes.cardContainer}
              >
                <Grid item xs={4} className={classes.gridPadding}>
                  <div className={classes.cardImageDiv}>
                    <img src={cardImage2} alt="" width="100%" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5 className={`${classes.h5} ${classes.cardInnerMargin}`}>
                    Colonel recipe fried chicken
                  </h5>
                  <h6 className={`${classes.h6} ${classes.cardInnerMargin}`}>
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                               className={classes.newPrice}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label className={classes.oldPrice}>Tk. 150.00</label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightAlign}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon
                          fontSize="small"
                          className={classes.iconColor}
                        />
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

      <Container maxWidth="xs" className={classes.containerPaddingStyle}>
        <section id="For Sharing">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              For Sharing
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.h6}`}>14 Items</label>
          </Box>

          {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
            <div key={i} className={classes.cardWrapper}>
              <Grid
                container
                alignItems="center"
                className={classes.cardContainer}
              >
                <Grid item xs={4} className={classes.gridPadding}>
                  <div className={classes.cardImageDiv}>
                    <img src={cardImage2} alt="" width="100%" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <h5 className={`${classes.h5} ${classes.cardInnerMargin}`}>
                    Colonel recipe fried chicken
                  </h5>
                  <h6 className={`${classes.h6} ${classes.cardInnerMargin}`}>
                    Delicious French bread toasted with garlic, buttter ....
                  </h6>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Grid container alignItems="center">
                        <label
                     className={classes.newPrice}
                        >
                          Tk. 150.00
                        </label>
                        &nbsp;
                        <label className={classes.oldPrice}>Tk. 150.00</label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.rightAlign}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        &nbsp;{" "}
                        <AddIcon
                          fontSize="small"
                          className={classes.iconColor}
                        />
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
