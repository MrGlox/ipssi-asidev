import PropTypes from "prop-types";

import "./Item.css";

const Item = ({ title = "", status = false, children }) => {
  return (
    <li>
      <h2>
        {typeof title === "string" ? title : null}{" "}
        <span
          className={`status ${status ? "status--green" : "status--red"}`}
        ></span>
      </h2>
      <p>{children}</p>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  status: PropTypes.bool,
  children: PropTypes.node,
};

export default Item;
