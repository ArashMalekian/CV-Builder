import React , {useRef , useState , useEffect , useContext} from 'react'
//context
import { phonecontext } from '../../../Contexts/CVContext';
//styles
import classes from './WelcomeBox.module.scss'
import Button from '@mui/material/Button'
import { loginValidate } from '../../../Functions/loginValidates';
import { Link } from 'react-router-dom';

export const WelcomeBox = () => {

    const context = useContext(phonecontext)
    const [phoneNumber, setPhonNumber] = useState({})
    const [validate, setValidate] = useState(false)
    const changePhoneNumberHandler = (event) => {
        setPhonNumber(event.target.value);
        context.pNum = event.target.value
    }
    const validateHandler = () => {
        if(phoneNumber.length === 11){
            setValidate(true)
        }
        else{
            setValidate(false)
        }

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
        ;
        validateHandler()
     }, [phoneNumber])


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
                 {
                     validate ? 
                 <Link to='/personalinfo' className={classes.link} >
                <Button variant='contained' className={classes.loginbtn}   >
                    ورود / ثبت نام
                </Button>
                </Link>   
                :
                <Button variant='contained' className={classes.loginbtn} disabled  >
                ورود / ثبت نام
            </Button>          
                 }
            </div>

        </div>
    )
}
