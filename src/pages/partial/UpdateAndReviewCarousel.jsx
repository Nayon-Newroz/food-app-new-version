import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid"; 
import postImage1 from "../../assets/images/postImage1.png";
import postImage2 from "../../assets/images/postImage2.png";
import postUser1 from "../../assets/images/postUser1.png";
import postUser2 from "../../assets/images/postUser2.png";
import galleryIcon from "../../assets/images/galleryIcon.png";
import foodSmallImage from "../../assets/images/foodSmallImage.png";
import Heart2 from "../../assets/images/Heart2.png";
import Message2 from "../../assets/images/Message2.png";
import Share2 from "../../assets/images/Share2.png"; 
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
    color: "#272D2F",
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
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
    margin: 0,
  },
  card2: {
    minHeight: "200px",
    width: "100%",
    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 8px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid #E5E5E5",
    borderRadius: "10px",
  },
  card2ImgDiv: {
    height: "180px",
    position: "relative",
  },
  card2DetailDiv: {
    minHeight: "100px",
    padding: "0 12px",
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
  carouselWidth: {
    minWidth: "700px",
    [theme.breakpoints.down(376)]: {
      minWidth: "600px",
    },
  },
  divider: {
    background: "#E5E5E5",
  },
  cardFooterLeft: {
    flexBasis: "50%",
    [theme.breakpoints.down(376)]: {
      flexBasis: "60%",
    },
  },
  cardFooterRight: {
    flexBasis: "50%",
    textAlign: "right",
    [theme.breakpoints.down(376)]: {
      flexBasis: "40%",
    },
  },
}));

const UpdateAndReviewCarousel = () => {
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
    slidesToShow: 2,
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
              <Grid
                container
                alignItems="center"
                style={{ paddingBottom: "15px" }}
              >
                <Grid item>
                  <img src={i % 2 === 0 ? postUser1 : postUser2} alt="" />
                </Grid>
                <Grid item style={{ paddingLeft: "15px" }}>
                  <div>
                    <h4 className={classes.h4} style={{ fontWeight: 500 }}>
                      Emily-Jackson87
                    </h4>
                    <Grid container alignItems="center">
                      <label className={classes.h5}>Instagram</label>
                      <span
                        style={{
                          height: "3px",
                          width: "3px",
                          background: "#666E7A",
                          borderRadius: "50%",
                          margin: "0 4px",
                        }}
                      ></span>
                      <label className={classes.h5}>2d</label>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.card2}>
                <div className={classes.card2ImgDiv}>
                  <img
                    src={i % 2 === 0 ? postImage1 : postImage2}
                    alt=""
                    height="100%"
                    width="100%"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      border: "1px solid #fff",
                      borderRadius: "10px",
                      overflow: "hidden",
                      height: "60px",
                      width: "60px",
                    }}
                  >
                    <img src={foodSmallImage} alt="" height="100%" />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,

                      backgroundColor: "black",
                      padding: "3px 10px",
                      borderRadius: "50px",
                      opacity: 0.5,
                    }}
                  >
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item xs={6}>
                        <img src={galleryIcon} alt="" width="13px" />
                      </Grid>
                      <Grid item xs={6}>
                        <p className={classes.p} style={{ marginLeft: "2px" }}>
                          12
                        </p>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className={classes.card2DetailDiv}>
                  {/* <img src={user} alt="" className={classes.cardImg} /> */}
                  <div style={{ padding: "15px 0" }}>
                    <h5
                      className={classes.h5}
                      style={{ marginBottom: "10px", color: "#272D2F" }}
                    >
                      Lorem ipsum dolor sit amet, consecte adipiscing elit.
                      Lacinia.
                    </h5>
                    <h5
                      className={classes.h5}
                      style={{
                        color: "#272D2F",
                        fontWeight: 500,
                      }}
                    >
                      #KfcBd #KfcMenu #DineMate
                    </h5>
                  </div>
                  <Divider classes={{ root: classes.divider }} />
                  <div style={{ padding: "15px 0" }}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item className={classes.cardFooterLeft}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Grid container alignItems="center">
                              <div>
                                {" "}
                                <img
                                  src={Heart2}
                                  alt=""
                                  style={{
                                    display: "block",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                              </div>
                              <div>
                                <h5 className={classes.h5}>1.5k</h5>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container alignItems="center">
                              <div>
                                {" "}
                                <img
                                  src={Message2}
                                  alt=""
                                  style={{
                                    display: "block",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                              </div>
                              <div>
                                <h5 className={classes.h5}>1.5k</h5>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container alignItems="center">
                              <div>
                                {" "}
                                <img
                                  src={Share2}
                                  alt=""
                                  style={{
                                    display: "block",
                                    marginRight: "4px",
                                  }}
                                />{" "}
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.cardFooterRight}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="flex-end"
                        >
                          <div>
                            {" "}
                            <img
                              src={Message2}
                              alt=""
                              style={{ display: "block", marginRight: "4px" }}
                            />{" "}
                          </div>
                          <div>
                            <h5 className={classes.h5}>1.5k</h5>
                          </div>
                        </Grid>
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

export default UpdateAndReviewCarousel;
