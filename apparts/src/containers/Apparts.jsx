import { useState } from "react";

import data from "../data";
import { Form, List } from "components";

import "styles/App.css";

const Apparts = () => {
  const [
    value, // getter
    setValue, // setter
  ] = useState(
    "" // Valeur par défaut
  );

  const [filtered, setFiltered] = useState(data);

  const handleChange = (ev) => {
    const { value } = ev.target;

    setValue(value);
    setFiltered(
      data.filter((appart) =>
        appart.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <main className="App-main">
        <Form handleChange={handleChange} value={value} />
        {filtered.length === 0 ? "Appart not found" : <List data={filtered} />}
      </main>
    </div>
  );
};

export default Apparts;
