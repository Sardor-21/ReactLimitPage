import React from "react";

const Header = ({ scrollPosition }) => {
  return (
    <header
      className={`header bg-white shadow w-100  ${scrollPosition}`}
      style={{ transition: 5 }}
    >
      <ul className="d-flex align-items-center justify-content-center m-0 p-0">
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            Html
          </a>
        </li>
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            Css
          </a>
        </li>
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            Bootstrap
          </a>
        </li>
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            Sass
          </a>
        </li>
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            TailwindCss
          </a>
        </li>
        <li className="list-unstyled p-3">
          <a className="text-decoration-none" href="/#">
            Javascript
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
