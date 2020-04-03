import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header2 bg-success-gradiant shadow-sm">
          <div className="">
            <nav className="navbar navbar-expand-lg h2-nav">
              <a className="navbar-brand" href="#">
                <h3 className="text-uppercase font-weight-bold text-white m-0">Game</h3>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#header2"
                aria-controls="header2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-menu"></span>
              </button>
              <div className="collapse navbar-collapse hover-dropdown" id="header2">
              
                 
               
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
