import { createContext, useState } from "react";
import data from "../data";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
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
    <ModalContext.Provider value={{ value, handleChange, filtered }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;
