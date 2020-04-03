import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import GameSection from "../components/GameSection";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <GameSection></GameSection>
      </div>
    );
  }
}
