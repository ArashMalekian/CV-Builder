import React , {useState} from 'react'
//style 
import classes from './Contact.module.scss'

export const Contact = () => {
    const [contact, setContact] = useState({
        email:"",
        mobileNumber:"",
        phoneNumber:"",
        address:"",
    })
    const changeHandler = (event) => {
        setContact({...contact , [event.target.name] : event.target.value});
        console.log(contact);
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
                        <input name='mobileNumber' type="number" placeholder='تلفن همراه' className={classes.contactinput} id={classes.mobileinput} value={contact.mobileNumber} onChange={changeHandler} />
                        <input name='phoneNumber' type="number" placeholder='تلفن' className={classes.contactinput} id={classes.phoneinput} value={contact.phoneNumber} onChange={changeHandler} />
                    </div>
                    <input name='address' className={classes.contactinput} type="text" placeholder='نشانی' id={classes.addinput} value={contact.address} onChange={changeHandler} />
                </div>
        </div>
    )
}
