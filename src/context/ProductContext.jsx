import React, { useState, createContext, useContext } from 'react';

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const initalState = Math.random;

  const [identificador, setIdentificador] = useState(initalState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const valuesToPass = {
    identificador,
    setIdentificador,
  };
  return (
    <ProductContext.Provider value={valuesToPass}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext is generating an errorr');
  }
  return context;
};
