import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import styles from '../../styles/yorstdSlider.module.css'
const Yostdslider = () => {
  return (
    <>
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.5}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >

      <div className={styles.yostdslider} >
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
        <img alt="" src="images/rectangle.svg" />
      </div>
      </InfiniteCarousel>
      
    </>
  );
};

export default Yostdslider;
