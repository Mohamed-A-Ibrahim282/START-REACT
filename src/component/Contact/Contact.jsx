import React, { Component } from "react";
import $ from "jquery";

export default class Contact extends Component {
  componentDidMount() {
    let labelHeight = $("label").innerHeight();

    $("input").on("input", function () {
      if ($(this).val().length == 0) {
        $(this).prev().children().animate({ top: labelHeight }, 400);
      } else {
        $(this).prev().children().animate({ top: "0px" }, 400);
      }
    });
  }

  render() {
    return (
      <>
        <section className="d-flex flex-column align-items-center justify-content-center pb-5">
          <h2 className="color1 fw-bold display-5">ABOUT COMPONENT</h2>
          <div className="d-flex align-items-center my-3">
            <div className="line secColor"></div>
            <i className="fa-solid fa-star mx-3 color1"></i>
            <div className="line secColor"></div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <div className="overflow-hidden ">
                <label htmlFor="userName">userName:</label>
              </div>
              <input type="text" id="userName" placeholder="userName" />
            </div>

            <div className="mb-3">
              <div className="overflow-hidden ">
                <label htmlFor="UserAge">UserAge:</label>
              </div>
              <input type="text" id="UserAge" placeholder="UserAge" />
            </div>

            <div className="mb-3">
              <div className="overflow-hidden ">
                <label htmlFor="UserEmail">UserEmail:</label>
              </div>
              <input type="text" id="UserEmail" placeholder="UserEmail" />
            </div>

            <div className="mb-3">
              <div className="overflow-hidden ">
                <label htmlFor="UserPassward">UserPassward:</label>
              </div>
              <input type="text" id="UserPassward" placeholder="UserPassward" />
            </div>

            <button className="mainColor border-0 rounded-3 px-3 py-2 text-white fw-semibold">
              Send message
            </button>
          </div>
        </section>
      </>
    );
  }
}
