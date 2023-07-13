import { createContext } from "react";

export const UserContext = createContext({ad:"" , email:""})
const data = {
    ad:"Nicat",
    email:"nicatt.zeynalli@gmail.com"
}
export default function Context({children}){
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>   
  )
}