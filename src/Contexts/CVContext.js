import React , {createContext, useState , useEffect} from 'react'
import { GetStates } from '../Functions/GetStates';

//contexts
export const phonecontext = createContext();


export const CVContext = (props) => {

    const [pNumber, setPNumber] = useState({
        pNum:0,
    });

    return (
        <div>
            <phonecontext.Provider value={pNumber}   >
                {props.children}
            </phonecontext.Provider>
        </div>
    )
}
