import React, { createContext , useState , useEffect } from 'react'
import { GetStates } from '../Functions/GetStates';

export const StatesContext = createContext();

export const StateContext = (props) => {
    const [states, setStates] = useState()
    useEffect(() => {
        const fetchData = async () => {
            setStates(await GetStates() );
        };
        fetchData();
    }, [])
    return (
        <div>
            <StatesContext.Provider  value={states} >
                {props.children}
            </StatesContext.Provider>
        </div>
    )
}
