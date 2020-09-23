import React, { Component } from "react";
import Slider from "react-slick";
import test from "../assets/test.jpg";
import uzi from "../assets/uzi.jpg";
import uzi1 from "../assets/uzi1.mp4";
import uzi2 from "../assets/uzi2.mp4";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      // lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div className="main_slider">
        <Slider {...settings}>
          <div width="200">
            <img src={test} width="200" style={{ margin: "0 auto" }} />
          </div>
          <div>
            <img src={uzi} width="200" style={{ margin: "0 auto" }} />
          </div>
          <div>
            <embed
              src={uzi1}
              height="300"
              width="300"
              style={{ margin: "0 auto" }}
            ></embed>
          </div>
          <div>
            <embed
              src={uzi2}
              height="300"
              width="300"
              style={{ margin: "0 auto" }}
            ></embed>
          </div>
        </Slider>
      </div>
    );
  }
}
