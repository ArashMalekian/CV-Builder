import React , {useState , useContext} from 'react'
import Select from 'react-select'
import { PInfoContext } from '../../../../Contexts/PersonalInfoContext';
import { StatesContext } from '../../../../Contexts/StateContext';
import {DatePicker} from "react-advance-jalaali-datepicker";
//style
import classes from './Personal.module.scss'

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
        DOB:""
    })

    const changeHandler = (event) => {
        const cityOption = event.city.map(item => ({
            value: item.name,
            label:item.name,
            id:item.id,
        }));
        setCity(cityOption)
        personalContext.state = event .value;
    }

    const textChangeHandler = (event) => {
        setPersonal({...personal , [event.target.name] : event.target.value});
        console.log(personal);
    }

    const DOBHandler = (event) => {
        console.log(event.target.value);
    }
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
                <input className={classes.personalinput} id={classes.nameinput} value={personal.lName} onChange={textChangeHandler} type="text" name='lName' placeholder='نام خانوادگی'  />
                <input className={classes.personalinput} id={classes.nameinput} value={personal.name} onChange={textChangeHandler} type="text" name='name' placeholder='نام' />
                </div>
                <DatePicker
                    
                    inputComponent={DatePickerInput}
                    placeholder=" تاریخ تولد"
                    format="jYYYY/jMM/jDD"
                    onChange={change}
                    id="datePicker"
                    />
                <div className={classes.selectbox} >
                <Select
                styles={customStyles}
                    className={classes.relselect}
                    defaultValue={personal.relation}
                    options={relOptions}
                    placeholder="وضعیت تاهل"
                    onChange={(event) => {
                        personalContext.relation = event.value;
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
                    console.log(personalContext);
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
                    console.log(personalContext);
                }}
                />
                </div>        
                </div>
               
                <input className={classes.personalinput} id={classes.jobinput} value={personal.job} onChange={textChangeHandler} type="text" name='job' placeholder='حرفه' />
                {/* <input className={classes.personalinput} id={classes.jobinput} value={personal.DOB} onChange={textChangeHandler} type='date' name='DOB' placeholder='تاریخ تولد' /> */}

            </div>
        </div>
    )
}
