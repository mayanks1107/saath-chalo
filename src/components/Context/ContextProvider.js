// Context.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext(); // Create the context

export const useValue = () => {
    return useContext(Context); // Export the useContext hook
}

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState("ayush");

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('token'));
        setState(prevState => ({
            ...prevState,
            currentUser: currentUser
        }));
    }, []);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}










































// import React, { createContext, useContext, useEffect } from 'react';

// const initialState = {
//     currentUser: null,
//     openLogin: false,
//     loading: false,
//     isRider: false,
//     Fullname: null,
//     id: null,
//     Email: null,
//     location: { lng: 0, lat: 0 },
// }

// const Context = createContext(initialState);


// export const useValue = () => {
//     return useContext(Context);
// }


// // console.log(useValue());

// // const Context = createContext(initialState);
// const ContextProvider = ({ children }) => {
//     useEffect(() => {
//         const currentUser = JSON.parse(localStorage.getItem('token'));
//         console.log(currentUser);
        
//     }, []);

//     return (
//         <Context.Provider value={Context}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider;






































// import React, { createContext, useContext, useEffect,  useRef } from 'react'


// const initailState = {
//     currentUser: null,
//     openLogin: false,
//     loading: false,
//     isRider: false,
//     Fullname:null,
//     id: null,
//     Email:null,
//     location: { lng: 0, lat: 0 },
// }

// const Context = createContext(initailState);

// export const useValue = () => {
//     return useContext(Context);
// }

// const ContextProvider = ({ children }) => {

//     useEffect(() => {
//         const currentUser = JSON.parse(localStorage.getItem('token'));
//     }, []);

//     return (
//         <Context.Provider value={{Context,useValue }}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider