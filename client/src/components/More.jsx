import React from "react";
import itunes from "../assets/itunes.jpg";
import spotify from "../assets/spotify.jpg";
import tuneIn from "../assets/tuneIn.jpg";
import deezer from "../assets/deezer.jpg";

export const More = () => {
  return (
    <div className="text-center mt-5 more">
      <div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 ">
            <img src={itunes} alt="" className="me-4" />
            <img src={spotify} alt="" className="me-4" />
            <img src={deezer} alt="" className="me-4" />
            <img src={tuneIn} alt="" className="me-4" />
            <div className="mt-4">
              <h2>DO MORE WITH HOO DOO APP</h2>
              <p>
                Get the most out of your HOO DOO device by downloading the app
                today. With the app, you can control your smart home, set
                reminders and alarms, make calls with just your voice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
