import React, { createContext , useState } from 'react'

export const PInfoContext = createContext();

export const PersonalInfoContext = (props) => {
    const [personalInfos, setPersonalInfos] = useState({
        intro:"",

    })
    return (
        <div>
            <PInfoContext.Provider value={personalInfos} >
                {props.children}
            </PInfoContext.Provider>
        </div>
    )
}
