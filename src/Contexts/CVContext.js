import React , {createContext, useState} from 'react'

//contexts
export const phonecontext = createContext();


export const CVContext = (props) => {

    const [pNumber, setPNumber] = useState({
        pNum:0
    });

    return (
        <div>
            <phonecontext.Provider value={pNumber} >
                {props.children}
            </phonecontext.Provider>
        </div>
    )
}
