import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ResturentBannerImage from "../../assets/images/ResturentBannerImage.png";
import { borderRadius } from "@mui/system";

const RestaurantCorousel = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        interval={2000}

        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div key={i}>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img src={ResturentBannerImage} alt="" width="100%" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RestaurantCorousel;
