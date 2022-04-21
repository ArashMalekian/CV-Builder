import React, { createContext , useState } from 'react'

export const abilitiesContext = createContext();

export const AbilityContext = (props) => {
    const [abilities, setAbilities] = useState({
        language:[],
        ability:[]
    })
    return (
        <div>
            <abilitiesContext.Provider value={abilities} >
                {props.children}
            </abilitiesContext.Provider>
        </div>
    )
}
