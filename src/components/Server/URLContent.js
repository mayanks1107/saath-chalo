import { createContext } from "react";
export const  URLContext = createContext()
export  const URLContextProvider =({children})=>{
    const server_url= 'http://localhost:4000';

return (
    <URLContext.Provider value={server_url}>
        {children}
    </URLContext.Provider>
)}