/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <section className="nav-section">
      <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="#">
          Online
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

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Introduction <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-text">
        <h1>The Town</h1>
        <p>WebSite HTML5,CSS3</p>
        <p>
          by <span>Hisham-Khalil</span>
        </p>
      </div>
    </section>
  );
}

export default Nav;
