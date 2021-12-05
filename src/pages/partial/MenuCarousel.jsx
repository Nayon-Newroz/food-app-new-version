import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles"; 

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
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: "11px 0",
    color: "#140205",
    // cursor:'pointer',
    textAlign: "center",
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
      color: "#140205",
      fontWeight: 500,
    },
    ["& h4"]: {
      color: "#140205",
      fontWeight: 600,
    },

    borderBottom: "2px solid #140205",
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

const MenuCarousel = ({ fnActive, active, activeIndex, reload }) => {
  const classes = useStyles();
  const [lateFire, setLateFire] = useState(false);

  const slider1 = useRef();

  const [state, setState] = useState({
    activeSlide: 0,
    activeSlide2: 0,
  });
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id="next"
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
        id="prev"
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  // const slidesToShowSlider = 3;
  // const arreyLength = 4;
  // const lowestIndex = 0;
  // const highestIndex = arreyLength - slidesToShowSlider;

  const settings = {
    className: "slider variable-width",
    // className: "center",
    // centerMode: true,
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    beforeChange: (current, next) => setState({ activeSlide: next }),
    afterChange: (current) => setState({ activeSlide2: current }),
  };
  useEffect(() => {
    slider1.current.slickGoTo(activeIndex);
    // console.log("activeIndex1111", activeIndex);
    // setTimeout(() => {
    //   setLateFire(!lateFire)
    // }, 2000);
  }, [activeIndex]);

  return (
    // <div className={classes.carouselWidth}>
    <div>
      {/* <h2>beforeChange and afterChange hooks</h2>
      <p>
        BeforeChange ==== activeSlide: <strong>{state.activeSlide}</strong>
      </p>
      <p>
        AfterChange ==== activeSlide: <strong>{state.activeSlide2}</strong>
      </p> */}
      <Slider ref={(slider) => (slider1.current = slider)} {...settings}>
        <div style={{ width: "auto"}}>
          <div style={{ padding: "0 25px" }}>
            <div
              className={`${classes.itemStyle} ${
                active === "Deals" ? classes.active : null
              }`}
              onClick={() => fnActive("Deals")}
            >
              <p className={`${classes.menuItem}`}>Deals</p>
            </div>
          </div>
        </div>
        <div style={{ width: "auto" }}>
          <div style={{ padding: "0 25px" }}>
            <div
              className={`${classes.itemStyle} ${
                active === "Popular" ? classes.active : null
              }`}
              onClick={() => fnActive("Popular")}
            >
              <p className={classes.menuItem}>Popular</p>
            </div>
          </div>
        </div>
        <div style={{ width: "auto" }}>
          <div style={{ padding: "0 25px" }}>
            <div
              className={`${classes.itemStyle} ${
                active === "For One" ? classes.active : null
              }`}
              onClick={() => fnActive("For One")}
            >
              <p className={classes.menuItem}>For One</p>
            </div>
          </div>
        </div>
        <div style={{ width: "auto" }}>
          <div style={{ padding: "0 25px" }}>
            <div
              className={`${classes.itemStyle} ${
                active === "For Sharing" ? classes.active : null
              }`}
              onClick={() => fnActive("For Sharing")}
            >
              <p className={classes.menuItem}>For Sharing</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MenuCarousel;
