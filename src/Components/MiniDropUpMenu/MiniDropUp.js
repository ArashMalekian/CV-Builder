import React , {useState} from 'react'
import classes from './MiniDropUp.module.scss'
import { Button } from '@mui/material'
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import { Link } from 'react-router-dom';

export const MiniDropUp = (props) => {

    const [next, setNext] = useState(false)
    const [prev, setPrev] = useState(false)
    const nextHandler = () => {
        setNext(true)
    }
    const prevHandler = () => {
        setPrev(true)
    }
    const falsyHandler = () => {
        setNext(false)
        setPrev(false)
    }


    return (
        <div className={classes.btngp} >
            <Link to={props.nextAddress} >
            <Button className={classes.nextbtn} onMouseMove={nextHandler} onMouseOut={falsyHandler} >
                {
                    next ? <h4 className={classes.btncontent} >
                        قسمت بعد
                    </h4>
                    :
                <ChevronLeftTwoToneIcon />
                }
            </Button>
            </Link>
            <div className={classes.titlebox} >
                <h5>
                    {props.title}
                </h5>
            </div>
            <Button className={classes.nextbtn} onMouseMove={prevHandler} onMouseOut={falsyHandler} >
                {
                    prev ? 
                    <h4  className={classes.btncontent}>
                        قسمت قبل
                    </h4>
                    :
                <NavigateNextTwoToneIcon />
                }
            </Button>
        </div>
    )
}
