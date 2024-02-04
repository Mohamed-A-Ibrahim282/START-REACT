import React, { Component } from "react";
import $ from "jquery";

export default class Portfolio extends Component {
  componentDidMount() {
    $(".col-md-4 .position-relative .layer").click(function () {
      let imgSrc = $(this).prev().attr("src");
      $(".img-layer").fadeIn(500).css("display", "flex");
      $(".img-layer img").attr("src", imgSrc);
    });

    $(".img-layer").click(function () {
      $(".img-layer").fadeOut(500);
    });
  }

  render() {
    return (
      <>
        <section className="d-flex flex-column align-items-center py-5 h-auto">
          <h2 className="fw-bold display-5 color1">PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center my-3">
            <div className="line secColor"></div>
            <i className="fa-solid fa-star mx-3 color1"></i>
            <div className="line secColor"></div>
          </div>

          <div className="container d-flex py-3">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/poert1.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/port2.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/port3.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/poert1.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/port2.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="position-relative">
                  <img
                    src={require("../img/port3.png")}
                    className="w-100 rounded-3"
                  />
                  <div className="layer rounded-3 align-items-center justify-content-center">
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="img-layer position-fixed top-0 bottom-0 start-0 end-0 align-items-center justify-content-center">
          <div className="col-md-5">
            <div>
              <img src={require("../img/poert1.png")} className="w-100" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
