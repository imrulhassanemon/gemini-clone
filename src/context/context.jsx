import { createContext } from "react";
import run from "../config/gemini";


export const Context = createContext()

const ContextProvider = (props) => {

    const onSent = async (prompt) =>{
        await run(prompt)
    }
    onSent('hi gemini')
    onSent('please give me a task for today')

    const contextValue ={

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}
export default ContextProvider