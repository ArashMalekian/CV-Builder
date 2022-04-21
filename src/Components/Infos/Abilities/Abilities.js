import React from 'react'
import classes from './Abilities.module.scss'
import {Header} from '../../Header/Header'
import { AbilityContent } from './AbilityContent/AbilityContent'

export const Abilities = () => {
    return (
        <>
            <Header adName={'مهارت ها'} nextAddress={'/ggjjvhhjv'} prevAddress={'/EduAndCertificationinfo'} />
            <div className={classes.container} >
            <AbilityContent />            
            </div>
        </>
    )
}
