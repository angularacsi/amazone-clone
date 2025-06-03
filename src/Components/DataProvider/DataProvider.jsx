import { red } from "@mui/material/colors";
import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { reducer } from "../../Utility/reducer";


export const DataContext = React.createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    );
}



