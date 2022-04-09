import { Button } from '@mui/material'
import React , {useState , useContext} from 'react'
//contexts
import { PInfoContext } from '../../../../Contexts/PersonalInfoContext'
//style
import classes from './Intro.module.scss'

export const Intro = () => {
    const context = useContext(PInfoContext)
    const [change, setChange] = useState()
    const changeHandler = (event) => {
        setChange(event.target.value)
    }

    const setContextHandler = () => {
        if (change){
        context.intro = change
        }
        else{
            context.intro="خالی"
        }

    }

    return (
        <div className={classes.introbox} >
            <div className={classes.topofintro} >
                <div className={classes.titleoftop} >
                    <h4>
                        مقدمه ای از خودتان
                    </h4>
                </div>
            </div>

            <div className={classes.content} >
                <Button className={classes.submitbtn} onClick={setContextHandler} >
                    ثبت
                </Button>
                <input type='text' className={classes.introinput} value={change} onChange={changeHandler} />
            </div>
        </div>
    )
}
