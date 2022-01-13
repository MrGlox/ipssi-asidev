import { useState, useEffect } from "react";
import { TodoForm, TodoList } from "components";

const ToDo = () => {
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
    localStorage.setItem("list", JSON.stringify(list));
  });

  return (
    <>
      <TodoForm onSubmit={handleSubmit} />
      <button onClick={handleClear}>clear</button>
      <TodoList list={list} handleComplete={handleComplete} />
    </>
  );
};

export default ToDo;
