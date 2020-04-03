import React, { Component } from "react";
import Chat from "./Chat";

export default class GameSection extends Component {
  render() {
    return (
      <div className="game-section shadow">
        <div className="p-3">
          <div className="row">
            <div className="col-md-3 d-flex mb-3">
              <div className="card p-1 bg-white shadow-sm h-100">
                <div className="list-group">
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#1</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">Player One</p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          60
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#2</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">Player Two</p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          40
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#3</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">
                          Player three
                        </p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          35
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#4</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">Player Four</p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          32
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#5</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">Player Five</p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          10
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item shadow-sm">
                    <div className="row">
                      <div className="col-2 px-1">
                        <div className="player-rank">#6</div>
                      </div>
                      <div className="col-7 px-1">
                        <p className="player-name m-0 text-left">Player Six</p>
                      </div>
                      <div className="col-3 px-1">
                        <p className="player-points m-0">
                          <img
                            src="bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                          />{" "}
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="btn btn-dark font-weight-bold text-uppercase shadow-sm">
                    <i className="fa fa-thumbs-up text-white"></i> Vote
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-0 mb-3">
              <div className="card card-body p-1 shadow-sm">
                <div className="card p-1 bg-white shadow-sm">
                  <img src="playing-area.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
            <div className="card card-body p-1 shadow-sm h-100">
                <div className="card bg-white shadow-sm h-100">
                  <Chat></Chat>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
