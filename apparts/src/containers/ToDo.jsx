import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoForm, TodoList } from "components";

const ToDo = () => {
  const navigate = useNavigate();

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const handleSubmit = (ev) => {
    // récupérer les valeurs
    ev.preventDefault();
    setList((prev) => [
      ...prev,
      { children: ev.target[0].value, complete: false },
    ]);
  };

  const handleComplete = (ev, completeIndex) => {
    setList((prev) =>
      prev.map((todo, index) =>
        index === completeIndex ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleClear = () => {
    localStorage.clear();
    setList([]);
  };

  useEffect(() => {
    // componentDidMount et componentDidUpdate
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <button onClick={handleClear}>clear</button>
      <TodoList list={list} handleComplete={handleComplete} />
      <button onClick={() => navigate("/apparts")}>Go previous page</button>
    </>
  );
};

export default ToDo;
