import PropTypes from "prop-types";
import "./HeaderSticky.css";

const HeaderSticky = ({ className = "" }) => {
  return (
    <header className={`header-sticky ${className}`}>
      <div className="fichier-22x-1-wrapper">
        <img
          className="fichier-22x-1"
          loading="lazy"
          alt=""
          src="/2fichier-22x-1@2x.png"
        />
      </div>
      <div className="nav-links-wrapper">
        <div className="nav-links">
          <b className="home">Home</b>
          <div className="about">About</div>
          <div className="how-it-works">How it Works</div>
          <div className="services">Services</div>
        </div>
      </div>
      <div className="user-links">
        <button className="link-disabledcursor-not-allo">
          <a className="log-in">Log In</a>
        </button>
        <button className="link-disabledcursor-not-allo1">
          <a className="sign-up">Sign Up</a>
        </button>
      </div>
    </header>
  );
};

HeaderSticky.propTypes = {
  className: PropTypes.string,
};

export default HeaderSticky;
