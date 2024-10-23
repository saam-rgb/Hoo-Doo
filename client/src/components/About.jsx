import React from "react";
import logo from "../../public/logo.webp";
import logoText from "../../public/logoText.webp";

export const About = () => {
  return (
    <div className="my-5 py-5 about">
      <div className="row justify-content-center">
        <div className="col-md-7 col-10 d-flex flex-column  align-items-center">
          <div className="mb-3">
            <img src={logo} alt="" className="logo me-3" />
            <img src={logoText} alt="" className="logoText" />
          </div>
          <p className="mb-4 text-center">
            Is a unique voice assistant designed for horror enthusiasts,
            blending suspense and supernatural elements into everyday tasks. It
            offers a playful yet eerie experience, perfect for fans of the
            spooky and mysterious.
          </p>
          <div className="">
            <button className="btn me-2">Buy now</button>
            <button className="btn btn1">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
