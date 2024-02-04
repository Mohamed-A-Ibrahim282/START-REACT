import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <section className="mainColor d-flex flex-column align-items-center justify-content-center py-5">
          <img
            src={
              "https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            }
            className="col-2"
          />
          <h2 className="mt-5 text-white fw-bold display-5">START FRAMEWORK</h2>
          <div className="d-flex align-items-center my-3">
            <div className="line bg-white"></div>
            <i className="fa-solid fa-star mx-3 text-white"></i>
            <div className="line bg-white"></div>
          </div>
          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </section>
      </>
    );
  }
}
