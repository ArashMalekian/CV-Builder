import React  from 'react'
//style
import classes from './PersonalInfo.module.scss'

import { Header } from '../../Header/Header'
import { Intro } from './Intro/Intro'
import {Contact} from './Contact/Contact'
import { Personal } from './Personal/Personal'



export const PersonalInfo = () => {
    return (
        <div className={classes.container} >
            <Header adName='اطلاعات شخصی' />
            <div className={classes.pinfocontainer} >
                <Intro />
                <div className={classes.contactandpersonal} >
                    <Contact />
                    <Personal />
                </div>
            </div>
        </div>
    )
}
