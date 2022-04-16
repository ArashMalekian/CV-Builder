import { Button } from '@mui/material'
import React , {useState , useEffect  , useContext} from 'react'
import { PInfoContext } from '../../../../Contexts/PersonalInfoContext'
import { ContactValidate } from '../../../../Functions/ContactValidate'
//style 
import classes from './Contact.module.scss'

export const Contact = () => {
    const context = useContext(PInfoContext)
    const [contact, setContact] = useState({
        email:"",
        mobileNumber:"",
        phoneNumber:"",
        address:"",
    })
    const [error, setError] = useState({})
    const [submit, setSubmit] = useState(false)
    const [errShower, setErrShower] = useState({
        address:false,
        mobileNumber:false,
    })
    const focusHandler = (event) => {
        setErrShower({...errShower , [event.target.name] : true })
    }
    const changeHandler = (event) => {
        setContact({...contact , [event.target.name] : event.target.value});
        console.log(contact);
    }
    const submitHandler = () => {
        if(contact.email && contact.mobileNumber && contact.phoneNumber && contact.address){
            setSubmit(true)
        }
    }
    useEffect(() => {
        setError(ContactValidate(contact));
        submitHandler()
    }, [contact])

    const setContextHandler = () => {
        context.address = contact.address;
        context.email = contact.email;
        context.phoneNumber = contact.phoneNumber;
        context.mobileNumber = contact.mobileNumber;
        console.log(context);
    }
    return (
        <div className={classes.container} >
            <div className={classes.contacttitle} >
                <div className={classes.titlebox} >
                <h4>
                    اطلاعات تماس
                </h4>
                </div>
            </div>
                <div className={classes.content} >
                    <input name='email' type="email" placeholder='ایمیل' className={classes.contactinput} id={classes.mailinput} value={contact.email} onChange={changeHandler} />
                    <div className={classes.inputgroup} >
                        <div>
                        <input name='mobileNumber' type="number" placeholder='تلفن همراه' className={classes.contactinput} id={classes.mobileinput} value={contact.mobileNumber} onChange={changeHandler} onFocus={focusHandler} />
                    {errShower.mobileNumber && <h6>{error.mobileNumber}</h6>}
                        </div>
                        <input name='phoneNumber' type="number" placeholder='تلفن' className={classes.contactinput} id={classes.phoneinput} value={contact.phoneNumber} onChange={changeHandler} />
                    </div>
                    <input name='address' className={classes.contactinput} type="text" placeholder='نشانی' id={classes.addinput} value={contact.address} onChange={changeHandler} onFocus={focusHandler} />
                    {errShower.address && <h6>{error.address}</h6>}
                    {
                        submit ?

                        <Button  className={classes.submitbtn} onClick={setContextHandler}>
                    ثبت
                        </Button>
                        :
                        <Button  className={classes.submitbtndisabled} disabled>
                        ثبت
                        </Button>

                }
                </div>
        </div>
    )
}
