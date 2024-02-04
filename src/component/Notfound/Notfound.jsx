import React, { Component } from "react";

export default class Notfound extends Component {
  render() {
    return (
      <>
        <section className="not-found d-flex align-items-center justify-content-center py-5">
          <img src={require("../img/404-page.gif")} className="img-fluid" />
        </section>
      </>
    );
  }
}
