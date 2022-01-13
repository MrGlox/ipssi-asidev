import { createContext, useState } from "react";
import data from "../data";

const MainContext = createContext({});

const MainProvider = ({ children }) => {
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

  const handleClear = () => {
    setValue("");
    setFiltered(data);
  };

  return (
    <MainContext.Provider
      value={{ value, handleChange, handleClear, filtered }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider };
export default MainContext;
