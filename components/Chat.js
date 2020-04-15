import React, { Component } from "react";

export default class Chat extends Component {
  state = {
    chat: [
      {
        by: "",
        chat: "Hello, lets play the quiz"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.chat.map(chat => {
          return chat.by === "learner" ? (
            <div className="d-flex justify-content-start mb-3 fade-in">
              <div className="img_cont_msg">
                <img
                  src="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
                  className="rounded-circle user_img_msg"
                />
              </div>
              <div className="msg_cotainer">
                {chat.chat}
                {/* <span class="msg_time">8:40 AM, Today</span> */}
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-end mb-3 fade-in p-2">
              {
              chat.type === "correct" ? (
                <div className="msg_cotainer_send correct">{chat.chat}</div>
              ) : chat.type === "incorrect" ? (
                <div className="msg_cotainer_send incorrect">{chat.chat}</div>
              ) : (
                <div className="msg_cotainer_send  shadow-sm">{chat.chat}</div>
              )}
              {/* <span class="msg_time_send">8:55 AM, Today</span> */}
              <div className="img_cont_msg d-flex justify-content-center align-items-center">
                <img
                  src="https://image.flaticon.com/icons/svg/201/201558.svg"
                  className="rounded-circle user_img_msg shadow-sm"
                />
              </div>
            </div>
          );
        })}

        <div className="card-footer px-2">
          <form onSubmit={this.messageSubmit}>
            <div className="input-group">
              <input
                name="message"
                className="message form-control shadow-sm type_msg"
                placeholder="Type your message..."
                onChange={this.typeMessage}
                value={this.state.message}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text send_btn  shadow-sm"
                  value="submit"
                  onClick={this.messageSubmit}
                >
                  <i className="fas fa-location-arrow" style={{fontSize:"24px"}} />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
