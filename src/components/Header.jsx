import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <Link to={"/"}>
            <h1 className="text-danger ">NETFLIX</h1>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 gap-3 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link text-white active"
                  aria-current="page"
                  href="#"
                >
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Filmler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Kategoriler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Diziler
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Film Ara"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Ara
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
