import React from "react";
import { Nav } from "./Nav";
import dragon from "../assets/dragon.png";

export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Your ultimate paranormal assistant</h2>
            <p>Unleash the haunt with Hoo Doo</p>
            <button className="btn">Learn more</button>
          </div>
          <div className="col-md-6">
            <img src={dragon} />
          </div>
          {/* <div className="col-md-4">
            <ul>
              <li>Playfully Spooky</li>
              <li>Mysterious & Cryptic</li>
              <li>Sarcastic & Dark Humor</li>
              <li>Chillingly Calm</li>
              <li>Ominous & Foreboding</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};
