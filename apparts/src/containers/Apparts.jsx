import { useContext } from "react";

import { Form, List } from "components";

import "styles/App.css";
import MainContext from "contexts/Main";

const Apparts = () => {
  const { value, handleChange, handleClear, filtered } =
    useContext(MainContext);

  return (
    <div className="App">
      <main className="App-main">
        <Form
          handleChange={handleChange}
          handleClear={handleClear}
          value={value}
        />
        {filtered.length === 0 ? "Appart not found" : <List data={filtered} />}
      </main>
    </div>
  );
};

export default Apparts;
