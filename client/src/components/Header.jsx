import React from "react";
import { Nav } from "./Nav";
import dragon from "../assets/dragon.png";

export const Header = () => {
  return (
    <div className="container mb-5">
      <div className="header">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-5 mt-md-0">
            <h1 className="text-center text-md-start">
              Your ultimate paranormal assistant
            </h1>
            <p>Unleash the haunt with Hoo Doo</p>
            <button className="btn secondary">Shop now</button>
          </div>
          <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
            <img src={dragon} className="size" />
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
