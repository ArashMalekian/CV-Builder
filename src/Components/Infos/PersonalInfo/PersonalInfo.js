import React  from 'react'
//style
import classes from './PersonalInfo.module.scss'
import { Header } from '../../Header/Header'
import { Intro } from './Intro/Intro'



export const PersonalInfo = () => {
    return (
        <>
            <Header adName='اطلاعات شخصی' />
            <div className={classes.pinfocontainer} >
                <Intro />
            </div>
        </>
    )
}
