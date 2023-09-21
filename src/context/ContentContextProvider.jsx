import React, { createContext, useState } from "react";

export const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
  const [file, setFile] = useState("");

  const value = {
    file,
    setFile,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentContextProvider;
