import PropTypes from "prop-types";
import "./ListSpaceY.css";

const ListSpaceY = ({ className = "", image, personalWorkspace }) => {
  return (
    <div className={`list-space-y-4 ${className}`}>
      <div className="item-flex">
        <div className="personal-workspace-icon">
          <img className="image-icon" alt="" src={image} />
        </div>
        <div className="personal-workspace">{personalWorkspace}</div>
      </div>
      <div className="item-flex1">
        <input className="discord-icon-personal" type="checkbox" />
        <div className="discord-support">Discord Support</div>
      </div>
      <div className="item-flex2">
        <div className="personal-assistant-icon">
          <img className="image-icon1" alt="" src="/image-3.svg" />
        </div>
        <div className="ai-assistant">AI Assistant</div>
      </div>
    </div>
  );
};

ListSpaceY.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  personalWorkspace: PropTypes.string,
};

export default ListSpaceY;
