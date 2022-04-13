import React, { createContext , useState } from 'react'

export const PInfoContext = createContext();

export const PersonalInfoContext = (props) => {
    const [personalInfos, setPersonalInfos] = useState({
        intro:"",
        name:"",
        lName:"",
        job:"",
        DOB:"",
        relation:"",
        exemption:"",
        state:"",
        city:"",
    })
    return (
        <div>
            <PInfoContext.Provider value={personalInfos} >
                {props.children}
            </PInfoContext.Provider>
        </div>
    )
}
