import Item from "../Item/Item";

const List = ({ data }) => (
  <ul>
    {data.map((appart, index) => (
      <Item key={index} {...appart} />
    ))}
  </ul>
);

export default List;
