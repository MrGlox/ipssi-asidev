import { TodoItem } from "components";

const List = ({ list = [], handleComplete }) => (
  <ul>
    {list.map((item, index) => (
      <TodoItem
        onClick={(ev) => handleComplete(ev, index)}
        key={index}
        {...item}
      ></TodoItem>
    ))}
  </ul>
);

export default List;
