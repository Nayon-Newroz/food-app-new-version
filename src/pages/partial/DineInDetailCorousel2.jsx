import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import personIcon from "../../assets/images/personIcon.png"; 
import FlagIcon from "../../assets/images/FlagIcon.png";
import Button from "@mui/material/Button";

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
    [theme.breakpoints.down(376)]: {
      fontSize: "11px !important",
    },
    background:'#F3F3F3',
    margin:'0 10px 0 0'
  },
  carouselWidth: {
    minWidth: "350px",
    [theme.breakpoints.down(376)]: {
      minWidth: "290px",
    },
  },
  iconStyle: {
    height: "18px",
    [theme.breakpoints.down(376)]: {
      height: "14px",
    },
  },
  dotStyle: {
    background: "#666E7A",
    height: "5px",
    width: "5px",
    borderRadius: "50%",
    margin: "0 5px",
    [theme.breakpoints.down(376)]: {
      height: "3px",
      width: "3px",
      margin: "0 4px",
    },
  },
}));

const DineInDetailCorousel2 = () => {
  
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
    className: "slider variable-width",
    // className: "center",
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    // <div className={classes.carouselWidth}>
      <div >
      <Slider {...settings}>
        <div style={{ width: "auto" }}>
          <div>
            <Button
              className={classes.iconButtonStyle2}
              disableRipple={true}
              variant="outlined"
              startIcon={
                <img src={personIcon} alt="" className={classes.iconStyle} />
              }
            >
              02<span className={classes.dotStyle}></span> Table No: 5
            </Button>
          </div>
        </div>

        <div style={{ width: "auto", }}>
          <div>
            <Button
              className={classes.iconButtonStyle2}
              disableRipple={true}
              variant="outlined"
              startIcon={
                <img src={FlagIcon} alt="" className={classes.iconStyle} />
              }
            >
              Main Hall, KFC Banani, Dhaka
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DineInDetailCorousel2;
