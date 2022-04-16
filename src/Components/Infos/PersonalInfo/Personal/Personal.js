import React , {useState , useContext , useEffect} from 'react'
import Select from 'react-select'
import { PInfoContext } from '../../../../Contexts/PersonalInfoContext';
import { StatesContext } from '../../../../Contexts/StateContext';
import {DatePicker} from "react-advance-jalaali-datepicker";
//style
import classes from './Personal.module.scss'
import { Button } from '@mui/material';
import { PersonalValidate } from '../../../../Functions/PersonalValidate';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted #86B049',
      color: state.isSelected ?  'white' : '#002408',
      backgroundColor: state.isSelected ?  '#00801C' : '#ecffe5',
      
    }),
    control: (provided , state) => ({
              ...provided,
      backgroundColor: state.isSelected ?  '#00801C' :'#c8c8c8',
      borderRadius:'5px',
      display:'flex',
      margin : '2px 0',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

const relOptions = [
    { value: 'مجرد', label: 'مجرد' },
    { value: 'متاهل', label: 'متاهل' },
  ];
const exemptionOptions = [
    { value: 'مشمول', label: 'مشمول' },
    { value: 'معافیت دائم', label: 'معافیت دائم' },
    { value: 'معافیت تحصیلی', label: 'معافیت تحصیلی' },
  ];
export const Personal = () => {
   const change  = (unix, formatted)=>{
       setPersonal({...personal , DOB : formatted})
        console.log(unix) // returns timestamp of the selected value, for example.
        console.log(formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
   const  DatePickerInput = (props) => {
        return <input className="popo" {...props} ></input>;
    }
    const context = useContext(StatesContext)
    const personalContext = useContext(PInfoContext)
    const personalName = personalContext.name
    
    const [city, setCity] = useState()

    const [personal, setPersonal] = useState({
        name:"",
        lName:"",
        job:"",
        DOB:"",
        state:"",
        city:"",
        relation:"",
        exemption:"",
    })

    const changeHandler = (event) => {
        const cityOption = event.city.map(item => ({
            value: item.name,
            label:item.name,
            id:item.id,
        }));
        setCity(cityOption)
        personalContext.state = event.value;
        setPersonal({...personal , state : event.value})
    }

    const textChangeHandler = (event) => {
        setPersonal({...personal , [event.target.name] : event.target.value});
    }

    const setcontextHandler  = () =>{
        personalContext.name = personal.name;
        personalContext.lName = personal.lName;
        personalContext.DOB = personal.DOB;
        personalContext.job = personal.job;
        console.log(personalContext);
    }
    const [submit, setSubmit] = useState(false)
    const submitValidation = () => {
        if(personal.name && personal.lName && personal.DOB && personal.job && personal.relation && personal.state && personal.city && personal.exemption){
            setSubmit(true)
        }
    }
    const [error, setError] = useState({})
    useEffect(() => {
        setError(PersonalValidate(personal))
        ;
        submitValidation()
     }, [personal])

    const [errShower, setErrShower] = useState({
        name:false,
        lName:false,
        DOB:false,
        job:false,
    })
    const focusHandler = (event) => {
        setErrShower({...errShower,[event.target.name] : true})}
    return (
        <div className={classes.container} >
            <div className={classes.personaltitle} >
                <div className={classes.titlebox} >
                <h4>
                    اطلاعات فردی
                </h4>
                </div>
            </div>
            <div className={classes.contentbox} >
                <div className={classes.namebox} >
                    <div>
                <input className={classes.personalinput} id={classes.nameinput} value={personal.lName} onChange={textChangeHandler} type="text" name='lName' placeholder='نام خانوادگی' onFocus={focusHandler} />
                 {errShower.lName && <h6>{error.lName}</h6>}
                    </div>
                    <div>
                <input className={classes.personalinput} id={classes.nameinput} value={personal.name} onChange={textChangeHandler} type="text" name='name' placeholder='نام' onFocus={focusHandler} />
                {errShower.name && <h6>{error.name}</h6>}
                    </div>
                </div>
                <DatePicker
                    className={classes.DatePicker}
                    onFocus={focusHandler}
                    inputComponent={DatePickerInput}
                    placeholder=" تاریخ تولد"
                    format="jYYYY/jMM/jDD"
                    onChange={change}
                    id="datePicker"
                    />
                {errShower.DOB && <h6>{error.DOB}</h6>}

                <div className={classes.selectbox} >
                <Select
                styles={customStyles}
                    className={classes.relselect}
                    defaultValue={personal.relation}
                    options={relOptions}
                    placeholder="وضعیت تاهل"
                    onChange={(event) => {
                        personalContext.relation = event.value;
                        setPersonal({...personal , relation:event.value})
                    }}
                    />                 
                <Select
                styles={customStyles}
                className={classes.relselect}
                defaultValue={personal.exemption}
                options={exemptionOptions}
                placeholder="وضعیت سربازی"
                onChange={(event) => {
                    personalContext.exemption = event.value;
                    setPersonal({...personal , exemption:event.value})
                }}
                />   
                <div> 
                <Select
                styles={customStyles}
                options={context}
                className={classes.relselect}
                placeholder="استان"
                onChange={changeHandler}
                />    
                <Select
                styles={customStyles}
                    className={classes.relselect}
                options={city}
                placeholder="شهر"
                onChange={(event) => {
                    personalContext.city = event.value;
                    setPersonal({...personal , city:event.value})
                }}
                />
                </div>        
                </div>
               
                <input className={classes.personalinput} id={classes.jobinput} value={personal.job} onChange={textChangeHandler} type="text" name='job' placeholder='حرفه' onFocus={focusHandler} />
                {errShower.job && <h6>{error.job}</h6>}

                {/* <input className={classes.personalinput} id={classes.jobinput} value={personal.DOB} onChange={textChangeHandler} type='date' name='DOB' placeholder='تاریخ تولد' /> */}
                <div>
                    {
                        submit ?
                    <Button className={classes.submitbtn}  onClick={setcontextHandler} >
                        ثبت
                    </Button>
                    :
                    <Button className={classes.submitbtndisabled} disabled   >
                        ثبت
                    </Button>
                    }
                </div>
            </div>
        </div>
    )
}
