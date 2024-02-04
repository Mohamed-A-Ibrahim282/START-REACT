import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";

export default class Navbar extends Component {
  componentDidMount() {
    $(".nav-link").click(function () {
      $(this).addClass("active");
      $(this).parent().siblings().find($(".nav-link")).removeClass("active");
      document.title = $(this).html().toLocaleLowerCase();
    });

    $(".navbar-brand").click(function () {
      $(this).siblings().find($(".nav-link")).removeClass("active");
      document.title = "home";
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 40) {
        $("nav.navbar").css({ padding: "6px" });
        console.log($(window).scrollTop());
      } else {
        $("nav.navbar").css({ padding: "24px" });
        console.log($(window).scrollTop());
      }
    });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg secColor fixed-top shadow">
          <div className="container">
            <Link className="navbar-brand text-white fs-3 fw-bold" to={""}>
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white fw-semibold"
                    aria-current="page"
                    to={"about"}
                  >
                    ABOUT
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white fw-semibold"
                    to={"portfolio"}
                  >
                    PORTFOLIO
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-white fw-semibold"
                    to={"contact"}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />

        <footer className="secColor pt-5">
          <div className="container text-white">
            <div className="row">
              <div className="col-md-4 py-5 d-flex flex-column align-items-center">
                <h4 className="fs-2">LOCATION</h4>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className="col-md-4 py-5 d-flex flex-column align-items-center">
                <h4 className="fs-2">AROUND THE WEB</h4>
                <div className="d-flex">
                  <div className="icon">
                    <i className="fa-brands fa-facebook-f text-white"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-twitter text-white"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-linkedin-in text-white"></i>
                  </div>
                  <div className="icon">
                    <i className="fas fa-globe text-white"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4 py-5 d-flex flex-column align-items-center">
                <h4 className="fs-2">ABOUT FREELANCER</h4>
                <p className="m-0">
                  Freelance is a free to use, licensed Bootstrap theme
                </p>
                <p className="m-0">created by Route</p>
              </div>
            </div>
          </div>

          <div className="py-5 end d-flex align-items-center justify-content-center text-white">
            <p className="m-0">Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
    );
  }
}
