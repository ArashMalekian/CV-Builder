import React , {useContext , useState} from 'react'
//context
import { phonecontext } from '../../Contexts/CVContext'
//style
import classes from './Header.module.scss'

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import {MiniDropUp} from '../MiniDropUpMenu/MiniDropUp';

export const Header = (props) => {
    const context = useContext(phonecontext)
    const [state, setstate] = useState(props.adName)
    return (
        <>
        <div className={classes.headercontainer} >
            <div className={classes.headercontent} >
                <div className={classes.numberitem} >
                <AccountCircleTwoToneIcon/>
                <h3>
                    {context.pNum}
                </h3>
                </div>
                <h2>
                {props.adName}
                </h2>
            </div>
        </div>
        <MiniDropUp title={state} />
        </>
    )
}
