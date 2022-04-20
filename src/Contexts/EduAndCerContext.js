import React, { createContext , useState } from 'react'

export const EducationCertification = createContext();

export const EduAndCerContext = (props) => {
    const [eduAndCer, setEduAndCer] = useState([
        
    ])
    return (
        <div>
            <EducationCertification.Provider value={eduAndCer} >
                {props.children}
            </EducationCertification.Provider>
        </div>
    )
}
