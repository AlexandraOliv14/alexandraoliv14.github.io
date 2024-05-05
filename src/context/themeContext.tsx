import React, { useState } from 'react';

export type themeState = 'cool' | 'ligthwarm' | 'warm';

// Define the shape of the context data
interface StateContextType {
    currentState: themeState;
    toggleState: (arg: themeState) => void;
}

// Create the context with a default value
export const ThemeContext = React.createContext<StateContextType>({
    currentState: 'cool',
    toggleState: () => { },
});

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<themeState>('cool');

    const toggleState = (theme: themeState) => {
        setState(theme);
    };

    return (
        <ThemeContext.Provider value={{ currentState: state, toggleState }}>
            {children}
        </ThemeContext.Provider>
    );
};