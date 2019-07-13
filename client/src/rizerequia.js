import React, { Component } from "react";

import "./rr-design.css";

import rize from "./imgs/RizeRequia/rize.jpg";
import requia from "./imgs/RizeRequia/requia.jpg";
import damien from "./imgs/RizeRequia/damien.jpg";
import hunter from "./imgs/RizeRequia/hunter.jpg";
import kolt from "./imgs/RizeRequia/kolt.jpg";

class Rize extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <p>
          Rize Requia is a story of a young woman that is a host of a demon and
          leads the demon lord's dominion. The story follows Requia's dominion
          and battle against opposing demons and dominions in struggles of
          survival.
        </p>

        <div className="card-container">
          <div className="card-image">
            <p>
              <img src={rize} alt="" width="100%" />
            </p>
          </div>

          <div className="card-body">
            <h1 style={{ color: "white" }}>Rize</h1>
            <p>
              Rize became the hostess of a demon lord named Requia when she was
              young. Requia resides within her body and soul, inheriting the
              role of Requia's heart. She gains the ability to convert ordinary
              human souls griefed with sin into demon souls compatible to
              joining the served lord's dominion.
            </p>

            <div className="rrfooter">
              <p>Read More </p>
              The reincarnation of Requia's Heart.
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <p>
              <img src={requia} alt="" width="100%" />
            </p>
          </div>

          <div className="card-body">
            <h1 style={{ color: "white" }}>Requia</h1>
            <p>
              A demon lord that was once renowned and feared throughout the
              legends of the netherlands. He resides within Rize's body and
              soul. He feeds off souls of humans and demons alike.
            </p>

            <div className="rrfooter">
              <p>Read More </p>
              The reincarnation of Requia's Heart.
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <p>
              <img src={kolt} alt="" width="100%" />
            </p>
          </div>

          <div className="card-body">
            <h1 style={{ color: "white" }}>Kolt Davidson</h1>
            <p>
              Kolt can be socially awkward and lazy. He spent most of his time
              in his room playing video games and not interacting with the
              outside world.
            </p>

            <div className="rrfooter">
              <p>Read More </p>
              The reincarnation of Requia's Fang filled with sins of sloth.
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <p>
              <img src={damien} alt="" width="100%" />
            </p>
          </div>

          <div className="card-body">
            <h1 style={{ color: "white" }}>Damien Kings</h1>
            <p>
              A silent man running from a troubled past. He often drowns his
              sorrows with alchohol.
            </p>

            <div className="rrfooter">
              <p>Read More </p>
              The reincarnation of Requia's Claws filled with sins of wrath.
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image">
            <p>
              <img src={hunter} alt="" width="100%" />
            </p>
          </div>

          <div className="card-body">
            <h1 style={{ color: "white" }}>Hunter Lorde</h1>
            <p>
              Hunter is a womanizer that is addicted to gambling and winnings.
              His drive is to impress the ladies and win money and treasures,
              through any means neccessary.
            </p>

            <div className="rrfooter">
              <p>Read More </p>
              The reincarnation of Requia's Fire filled with sins of greed.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rize;
