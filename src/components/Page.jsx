import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className = "" }) => {
  const onTestimonialCardsContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`testimonial-cards ${className}`}
      onClick={onTestimonialCardsContainerClick}
    >
      <div className="rectangle-parent">
        <div className="frame-child" />
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/rectangle-35@2x.png"
        />
      </div>
      <div className="rectangle-group">
        <div className="frame-inner" />
        <img
          className="rectangle-icon"
          loading="lazy"
          alt=""
          src="/rectangle-30@2x.png"
        />
      </div>
      <div className="rectangle-container">
        <div className="rectangle-div" data-scroll-to="rectangle" />
        <img
          className="frame-child1"
          loading="lazy"
          alt=""
          src="/rectangle-33@2x.png"
        />
      </div>
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
