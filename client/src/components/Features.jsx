import React from "react";
import dragon from "../assets/dragon.png";

export const Features = () => {
  return (
    <div className="container my-5">
      <div className="row px-md-0 px-sm-2 px-4">
        <div className="col-lg-4 col-12">
          <div className="feat">
            <h3 className="text-uppercase">Virtual Trick-or-Treat</h3>
            <p>
              Say, “Hoo Doo, trick or treat,” and it will respond with a
              surprise, like a spooky sound, joke, or treat-like response.  
            </p>
          </div>
          <div className="feat">
            <h3 className="text-uppercase">Movie recommendations</h3>
            <p>
              Alexa can play Halloween-themed music and playlists from services
              like Spotify or Amazon Music.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center mb-lg-0 mb-5">
          <img src={dragon} alt="Dragon Image" />
        </div>
        <div className="col-lg-4 col-12">
          <div className="feat">
            <h3 className="text-uppercase">
              Scary Music and Halloween Playlists
            </h3>
            <p>
              Hoo Doo can play Halloween-themed music and playlists from
              services like Spotify or Amazon Music.
            </p>
          </div>
          <div className="feat">
            <h3 className="text-uppercase">Interactive Halloween Stories</h3>
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
