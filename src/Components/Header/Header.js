import React , {useContext} from 'react'
//context
import { phonecontext } from '../../Contexts/CVContext'
//style
import classes from './Header.module.scss'

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export const Header = (props) => {
    const context = useContext(phonecontext)
    return (
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
    )
}
