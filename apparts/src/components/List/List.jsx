import PropTypes from "prop-types";

import { Item } from "components";

const List = ({ data }) => (
  <ul>
    {data.map((appart, index) => (
      <Item key={index} {...appart} />
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
