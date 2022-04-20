import React from 'react'
import { Header } from '../../Header/Header'
import { Certification } from './Certification/Certification'
import { Education } from './Education/Education'
import classes from './EducationAndCertification.module.scss'

export const EducationAndCertificationInfo = () => {
    return (
        <>
        <Header adName='دوره ها و وضعیت تحصیل' nextAddress={'/gfxjvh'} />
            <div className={classes.content} >
                <Education />
                <Certification />
            </div>
        </>
    )
}
