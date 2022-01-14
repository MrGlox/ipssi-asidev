import { createContext, useState } from "react";

const ModalContext = createContext([false, () => {}]);

const ModalProvider = ({ children }) => {
  const [
    open, // getter
    setOpen, // setter
  ] = useState(
    false // Valeur par défaut
  );

  return (
    <ModalContext.Provider value={[open, setOpen]}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;
