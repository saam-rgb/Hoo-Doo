import React from "react";
import dragon from "../assets/dragon.png";

export const Features = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="feat">
            <h2 className="text-uppercase">Virtual Trick-or-Treat</h2>
            <p>
              Say, “Hoo Doo, trick or treat,” and it will respond with a
              surprise, like a spooky sound, joke, or treat-like response.  
            </p>
          </div>
          <div className="feat">
            <h2 className="text-uppercase">Movie recommendations</h2>
            <p>
              Alexa can play Halloween-themed music and playlists from services
              like Spotify or Amazon Music.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img src={dragon} alt="Dragon Image" />
        </div>
        <div className="col-md-4">
          <div className="feat">
            <h2 className="text-uppercase">
              Scary Music and Halloween Playlists
            </h2>
            <p>
              Hoo Doo can play Halloween-themed music and playlists from
              services like Spotify or Amazon Music.
            </p>
          </div>
          <div className="feat">
            <h2 className="text-uppercase">Interactive Halloween Stories</h2>
            <p>
              Hoo Doo offers interactive choose-your-own-adventure horror
              stories that you can play with family or friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
