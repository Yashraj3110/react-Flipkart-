import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";
import "./nav.css";

const Navbar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="container1"></div>
      <div className="container-fluid" id="navp">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link to="/" className="logo">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
                width="130"
                height="22"
                alt="Flipkart"
                title="Flipkart"
                className="aqQN50"
                href=""
              ></img>

              <p className="_2FZvZO">
                <span className="G90_N3">Explore</span>
                <span className="_1NZ9Rr">Plus </span>
                <img
                  className="_2IlWoL"
                  width="10"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
                  height="10"
                  alt="Plus Brand"
                />
              </p>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <form className="d-flex  me-auto" role="search">
                <div className="form">
                  <img
                    className="fa-search"
                    src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20class%3D%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ESearch%20Icon%3C%2Ftitle%3E%3Cpath%20d%3D%22M10.5%2018C14.6421%2018%2018%2014.6421%2018%2010.5C18%206.35786%2014.6421%203%2010.5%203C6.35786%203%203%206.35786%203%2010.5C3%2014.6421%206.35786%2018%2010.5%2018Z%22%20stroke%3D%22%23717478%22%20stroke-width%3D%221.4%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2016L21%2021%22%20stroke%3D%22%23717478%22%20stroke-width%3D%221.4%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    alt="Plus Brand"
                  />
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Search for Products,Brands and More"
                  />
                </div>
              </form>

              <div id="Sidenavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/Fseller" className="nav-link">
                      <p>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"></img>{" "}
                        <span className="navt"> Become a seller</span>
                      </p>
                    </Link>
                  </li>

                  <li id="li" class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="btn"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>{" "}
                      <span className="navt"> Sign in</span>
                    </a>

                    <ul class="dropdown-menu" id="btn2">
                      <li>
                        <a class="dropdown-item" href="#">
                          New Customer?
                          <Link to="/Signup" className="surl">
                            {" "}
                            Sign up
                          </Link>
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg" />
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" />
                          Plus Zone
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" />
                          Orders
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" />
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/Cart" className="nav-link">
                      <p>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"></img>{" "}
                        <span className="navt">Cart</span>
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link">
                      <p>
                        <i className="bi bi-three-dots-vertical"></i>{" "}
                        <span className="navt"></span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
