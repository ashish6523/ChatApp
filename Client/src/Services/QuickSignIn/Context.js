
import React, { createContext } from 'react';
import * as Service from './Service';

export const QuickSignInContext = createContext();

export const QuickSignInProvider = ({ children }) => {
    return (
        <QuickSignInContext.Provider
            value={Service}
        >
            {children}
        </QuickSignInContext.Provider>
    );
};