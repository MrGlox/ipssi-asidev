import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { lowerSlugify } from "utils";

const Item = ({ title = "", status = false, children }) => {
  return (
    <li>
      <h2>
        <Link to={`/apparts/${lowerSlugify(title)}`}>
          {typeof title === "string" ? title : null}{" "}
          <span
            className={`status ${status ? "status--green" : "status--red"}`}
          ></span>
        </Link>
      </h2>
      <p>{children}</p>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.bool,
  children: PropTypes.node,
};

export default Item;
