import React , {useRef , useState , useEffect} from 'react'
//styles
import classes from './WelcomeBox.module.scss'
import Button from '@mui/material/Button'
import { loginValidate } from '../../../Functions/loginValidates';

export const WelcomeBox = () => {
    const [phoneNumber, setPhonNumber] = useState({})
    const changePhoneNumberHandler = (event) => {
        setPhonNumber(event.target.value)
        console.log(phoneNumber);
    }
    const boxOne = useRef();
    const boxTwo = useRef();
    const hideBoxHandler = () =>{
        boxOne.current.style.visibility = "hidden";
        boxOne.current.style.opacity = 0;
        boxTwo.current.style.visibility = "visible" ;
        boxTwo.current.style.opacity = 1 ;
    }

    const [error, setError] = useState({})
    const [shower, setShower] = useState(true)
    const showerHandler = () => {
        setShower(false)
    }
     useEffect(() => {
        setError(loginValidate(phoneNumber))
      console.log(error);
     }, [phoneNumber ,error ])


    return (
        <div className={classes.container}>

            <div className={classes.welcomebox} ref={boxOne} >
                <h3>
                    به رزومه ساز آزمایشی خوش آمدید 
                </h3>
                <Button variant='contained' className={classes.loginbtn} onClick={hideBoxHandler}  >
                    ورود / ثبت نام
                </Button>
            </div> 

            <div className={classes.loginbox} ref={boxTwo} >
                <h4>
                    برای ورود یا ثبت نام شماره تلفن خود را وارد کنید
                </h4>
                <input type="number" placeholder='09123456789' className={classes.numberinput} value={phoneNumber} onChange={changePhoneNumberHandler} onFocus={showerHandler}  />
                {
                    !shower && <div className={classes.error} > {error.err} </div>
                 }
                <Button variant='contained' className={classes.loginbtn}   >
                    ورود / ثبت نام
                </Button>                
            </div>

        </div>
    )
}
