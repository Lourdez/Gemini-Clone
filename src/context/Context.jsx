import { createContext } from 'react';
import run from '../config/gemini.js';

// G:\Assignments and projects\Projects\Source Code\gemini-clone\src\config\gemini.js


export const Context = createContext();

const ContextProvider = (props) => {


    const onSent = async (prompt) => {
        await run(prompt);
    }

    onSent("what is react js");

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );

};

export default ContextProvider;