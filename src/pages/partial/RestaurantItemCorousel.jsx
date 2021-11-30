import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import cardBackground1 from "../../assets/images/cardBackground1.png";
import cardBackground2 from "../../assets/images/cardBackground2.png";
import user from "../../assets/images/user.svg";
import Heart from "../../assets/images/Heart.svg";

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

  card: {
    backgroundImage: `url(${cardBackground1})`,
    height: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down(376)]: {
      height: "130px",
    },
  },

  cardIconDiv: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  cardTextDiv: {
    position: "absolute",
    bottom: 10,
    left: 10,
    display: "flex",
    alignItems: "center",
  },
  cardImg: {
    height: "30px",
    marginRight: "10px",
  },
  carouselWidth: {
    minWidth: "500px",
    [theme.breakpoints.down(376)]: {
      minWidth: "440px",
    },
  },
  dotStyle: {
    background: "#fff",
    height: "4px",
    width: "4px",
    borderRadius: "50%",
    margin: "0 5px",
    display: "inline-block",
  },
}));

const RestaurantItemCorousel = () => {
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
            <div style={{ padding: "0 20px 0 0", margin: "auto" }}>
              <div
                className={classes.card}
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? `url(${cardBackground1})`
                      : `url(${cardBackground2})`,
                }}
              >
                <div className={classes.cardIconDiv}>
                  <img src={Heart} alt="" style={{ display: "block" }} />
                  <p className={classes.p} style={{ color: "#fff" }}>
                    95
                  </p>
                </div>
                <div className={classes.cardTextDiv}>
                  <img src={user} alt="" className={classes.cardImg} />
                  <div>
                    <p
                      className={classes.p}
                      style={{ color: "#fff", fontWeight: 600 }}
                    >
                      @rakib12
                    </p>
                    <p
                      className={classes.p}
                      style={{ color: "#fff", fontSize: "10px" }}
                    >
                      2 days ago <span className={classes.dotStyle}></span>{" "}
                      Instagram
                    </p>
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

export default RestaurantItemCorousel;
