import React from "react";
import logo from "../imgs/logo.png";
function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <nav class="navbar navbar-expand-lg  container_nav">
          <a class="navbar-brand container_logo" href={() => false}>
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse content_nav"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav nav_items">
              <li class="nav-item active">
                <a class="nav-link" href="#about">
                  About <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={() => false}>
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#number">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <div className="nav_icon">
                <div className="icon-item">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="icon-item">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="icon-item">
                  <i class="fa-brands fa-discord"></i>
                </div>
              </div>
            </ul>
            <div class="walletArea">
              <button class="connectWallet">Connect</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
