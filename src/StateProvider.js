// React Context ApI 
import React, { createContext, useContext, useReducer } from "react";
// create__update__use create this & manage it  
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
