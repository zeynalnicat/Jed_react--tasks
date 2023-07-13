import { createContext } from "react";

export const FN_Context = createContext({ ad: "", soyad: "" });

const data = {ad:"Nicat", soyad:"Zeyn"}
 const FullNameContext = ({ children }) => {
  return <FN_Context.Provider value={data}>{children}</FN_Context.Provider>;
};

export default FullNameContext;
