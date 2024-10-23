import React from "react";
import logo from "../../public/logo.webp";
import logoText from "../../public/logoText.webp";

export const Nav = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container  bg-transparent">
          <a class="navbar-brand d-flex align-items-end" href="#">
            <img src={logo} alt="" className="logo me-2" />
            <img src={logoText} alt="" className="logoText" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav"></div>
        </div>
      </nav>
    </div>
  );
};
