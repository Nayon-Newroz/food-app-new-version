import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import burger from "../../assets/images/burger.png";
import chicken from "../../assets/images/chicken.png";
import batch from "../../assets/images/batch.svg";
import Like from "../../assets/images/Like.svg";

import Liker1 from "../../assets/images/Liker1.svg";
import Liker2 from "../../assets/images/Liker2.svg";
import Liker3 from "../../assets/images/Liker3.svg";
import LikerRest from "../../assets/images/LikerRest.svg";

const useStyles = makeStyles((theme) =>({
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
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
    
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  card2: {
    minHeight: "200px",
    width: "100%",

    boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 8px",
    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    overflow: "hidden",
    background: "#fff",
  },
  card2ImgDiv: {
    height: "100px",
    position: "relative",
  },
  card2DetailDiv: {
    minHeight: "100px",
    padding: "5px 7px",
  },
  cardImg: {
    height: "30px",
    marginRight: "10px",
  },
  buttonStyle: {
    background: "black !important",
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  carouselWidth:{
    minWidth: "560px",
    [theme.breakpoints.down(376)]: {
      minWidth: "520px",
    },
  }
}));

const RecommendationItemCarousel = () => {
  const classes = useStyles();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={classes.carouselWidth}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div key={i}>
            <div style={{ padding: "0 10px 0 0", margin: "auto" }}>
              <div className={classes.card2}>
                <div className={classes.card2ImgDiv}>
                  <img
                    src={i % 2 === 0 ? chicken : burger}
                    alt=""
                    height="100%"
                    width="100%"
                  />
                  <img
                    src={batch}
                    alt=""
                    style={{ position: "absolute", top: 10, right: 10 }}
                  />
                </div>
                <div className={classes.card2DetailDiv}>
                  {/* <img src={user} alt="" className={classes.cardImg} /> */}
                  <div>
                    <h5 className={classes.h5} style={{ marginBottom: "10px" }}>
                      Aku’s Sandwich
                    </h5>
                    <Grid
                      container
                      alignItems="center"
                      style={{ marginBottom: "10px" }}
                    >
                      <Grid item xs={6}>
                        <Grid container alignItems="center">
                          <Grid item>
                            {" "}
                            <img
                              src={Like}
                              alt=""
                              style={{ display: "block", marginRight: "4px" }}
                            />{" "}
                          </Grid>
                          <Grid item>
                            <p className={classes.p} style={{ color: "black" }}>
                              100%
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack
                          direction="row"
                          spacing={-0.7}
                          style={{ float: "right" }}
                        >
                          <Avatar
                            alt=""
                            src={Liker1}
                            sx={{ width: 14, height: 14 }}
                          />
                          <Avatar
                            alt=""
                            src={Liker2}
                            sx={{ width: 14, height: 14 }}
                          />
                          <Avatar
                            alt=""
                            src={Liker3}
                            sx={{ width: 14, height: 14 }}
                          />
                          <Avatar
                            alt=""
                            src={LikerRest}
                            sx={{ width: 14, height: 14 }}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      style={{ marginBottom: "10px" }}
                    >
                      <Grid item xs={9}>
                        <Grid container alignItems="center">
                          <label
                            className={classes.h6}
                            style={{ color: "black", fontWeight: 600 }}
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
                          <AddIcon fontSize="small" style={{ color: "#fff" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendationItemCarousel;
