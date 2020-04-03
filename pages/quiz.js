import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Header from '../components/Header';
import Banner from "../components/Banner";
import GameSection from "../components/GameSection";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <main>
          <Navbar></Navbar>
          <Banner></Banner>
          <GameSection></GameSection>
        </main>
      </div>
    );
  }
}
