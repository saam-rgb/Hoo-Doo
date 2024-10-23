import React from "react";
import logo from "../../public/logo.webp";
import logoText from "../../public/logoText.webp";

export const About = () => {
  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex flex-column  align-items-center">
          <div>
            <img src={logo} alt="" className="logo" />
            <img src={logoText} alt="" className="logo" />
          </div>
          <p>
            Is a unique voice assistant designed for horror enthusiasts,
            blending suspense and supernatural elements into everyday tasks. It
            offers a playful yet eerie experience, perfect for fans of the
            spooky and mysterious.
          </p>
          <div className="">
            <button className="btn me-2">Buy now</button>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
