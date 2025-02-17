import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext()

const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState('')
    const [prePrompts, setPrePrompts] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')


    const onSent = async (prompt) =>{
        // setResultData('')
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput('')
    }

    const contextValue ={
        input, 
        setInput,
        recentPrompt, 
        setRecentPrompt,
        prePrompts, 
        setPrePrompts,
        showResult,
        setShowResult,
        loading, 
        setLoading,
        resultData,
        setResultData,
        onSent
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}
export default ContextProvider