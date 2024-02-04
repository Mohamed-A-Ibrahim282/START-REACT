import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="mainColor d-flex flex-column align-items-center justify-content-center py-5">
          <h2 className="mt-5 text-white fw-bold display-5">ABOUT COMPONENT</h2>
          <div className="d-flex align-items-center my-3">
            <div className="line bg-white"></div>
            <i className="fa-solid fa-star mx-3 text-white"></i>
            <div className="line bg-white"></div>
          </div>

          <div className="container d-flex py-3">
            <div className="row">
              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>

              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
