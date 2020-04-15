import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className=" text-left p-3 d-flex">
          <div className="row w-100">
            <div className="col-md-6 d-flex align-items-center">
              <img src="/clock.png" alt="" className="float-left mr-3" style={{ width: "12%" }} />
              <h5 className="m-0"> ROUND 1 OF 3</h5>
            </div>

            <div className="col-md-3">
              <div className="input-group">
                <input
                  name="message"
                  class="message form-control shadow-sm type_msg float-right"
                  placeholder="Search Topic Here."
                />
                <div className="input-group-append">
                  <span
                    class="input-group-text send_btn  shadow-sm"
                    value="submit"
                  >
                    <i
                      class="fas fa-search"
                      style={{ fontSize: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <div className=" btn-link">Add Subject</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
