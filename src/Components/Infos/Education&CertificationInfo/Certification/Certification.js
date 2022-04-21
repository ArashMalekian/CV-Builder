import { Button } from '@mui/material'
import React , {useContext , useState , useEffect }  from 'react'
import Select from 'react-select'
import AddIcon from '@mui/icons-material/Add';
import classes from './Certification.module.scss'
import {  StatesContext } from '../../../../Contexts/StateContext';
import { EducationCertification } from '../../../../Contexts/EduAndCerContext';

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
const eduOptions = [
    { value: 'سیکل', label: 'سیکل' },
    { value: 'دیپلم', label: 'دیپلم' },
    { value: 'کاردانی', label: 'کاردانی' },
    { value: 'کارشناسی', label: 'کارشناسی' },
    { value: 'کارشناسی ارشد', label: 'کارشناسی ارشد' },
    { value: 'دکتری', label: 'دکتری' },
  ];
  const yearOptions = [
      { value: 'مشغول به تحصیل', label: 'مشغول به تحصیل' },
      { value: '1370', label: '1370' },
      { value: '1371', label: '1371' },
      { value: '1372', label: '1372' },
      { value: '1373', label: '1373' },
      { value: '1374', label: '1374' },
      { value: '1375', label: '1375' },
      { value: '1376', label: '1376' },
      { value: '1377', label: '1377' },
      { value: '1378', label: '1378' },
      { value: '1379', label: '1379' },
      { value: '1380', label: '1380' },
      { value: '1381', label: '1381' },
      { value: '1382', label: '1382' },
      { value: '1383', label: '1383' },
      { value: '1384', label: '1384' },
      { value: '1385', label: '1385' },
      { value: '1386', label: '1386' },
      { value: '1387', label: '1387' },
      { value: '1388', label: '1388' },
      { value: '1389', label: '1389' },
      { value: '1390', label: '1390' },
      { value: '1391', label: '1391' },
      { value: '1392', label: '1392' },
      { value: '1393', label: '1393' },
      { value: '1394', label: '1394' },
      { value: '1395', label: '1395' },
      { value: '1396', label: '1396' },
      { value: '1397', label: '1397' },
      { value: '1398', label: '1398' },
      { value: '1399', label: '1399' },
      { value: '1400', label: '1400' },
    ];
export const Certification = () => {
    const context = useContext(StatesContext)
    const eduContext = useContext(EducationCertification)
    const [education, setEducation] = useState({
        edu:"",
        institution:"",
        degree:"",
        institutionState:"",
        dateOfGraduated:"",
        
    })
    const inputChangeHandler = (event) => {
        setEducation({...education , [event.target.name] : event.target.value });
        console.log(education);
    }
    const submitHandler = () => {
        eduContext.education.push(
            {
                edu:education.edu,
                institution:education.institution,
                degree:education.degree,
                institutionState:education.institutionState,
                dateOfGraduated:education.dateOfGraduated,
            }
            )
    }
    const plusHandler = () => {
        eduContext.education.push(
            {
                edu:education.edu,
                institution:education.institution,
                degree:education.degree,
                institutionState:education.institutionState,
                dateOfGraduated:education.dateOfGraduated,
            }
        )
        console.log(eduContext);
        setEducation({...education,
            edu:"",
            institution:"",
            degree:"",
            institutionState:"",
            dateOfGraduated:""
            
        })
    }
    const [disabler, setDisabler] = useState(false)
    useEffect(() => {
        if( education.edu.length === 0 || education.institution.length === 0 || education.degree.length === 0 || education.institutionState.length === 0 || education.dateOfGraduated.length === 0 ){
            console.log(disabler);
        }
        else{
            setDisabler(true)
        }
    }, [education])
    return (
<div className={classes.container} >
            <div className={classes.contacttitle} >
                <div className={classes.titlebox} >
                <h4>
                    وضعیت تحصیلی
                </h4>
                </div>
            </div>
                <div className={classes.content} >
                    <div className={classes.infobox} >
                    <div className={classes.p1} >

                        <input name='edu' type={'text'} placeholder="رشته تحصیلی" className={classes.input} value={education.edu} onChange={inputChangeHandler} />
                <Select
                styles={customStyles}
                options={eduOptions}
                placeholder="مدرک تحصیلی"
                onChange={(event) => {
                    setEducation({...education , degree : event.value});
                    console.log(education);
                }}
                />  
                </div>
                <div className={classes.p2} >
                <Select
                styles={customStyles}
                options={yearOptions}
                placeholder="تاریخ اخذ مدرک"
                onChange={(event) => {
                    setEducation({...education , dateOfGraduated : event.value});
                    console.log(education);
                }}
                />  
                <input name='institution' type={'text'} placeholder="دانشگاه" id={classes.uniinput} className={classes.input} value={education.institution} onChange={inputChangeHandler} />
                <Select
                styles={customStyles}
                placeholder="استان"
                options={context}
                onChange={(event) => {
                    setEducation({...education , institutionState : event.value});
                    console.log(education);
                }}
                />  

                </div>
                        
                    </div>
                    <div className={classes.itemfooter} >
                        <div className={classes.hintbox} >
                            {
                                disabler ?
                            <Button className={classes.plusbtn} onClick={plusHandler} size='small' variant='outlined' >
                                اضافه
                            <AddIcon sx={{fontSize:'23px'}} />
                            </Button>
                            :
                            <Button className={classes.disableplusbtn} onClick={plusHandler} size='small' disabled variant='outlined' >
                                اضافه
                            <AddIcon sx={{fontSize:'23px'}} />
                            </Button>
                            }
                            <h4>
                                اگر تمایل به ثبت مدارک بیشتری دارید ، اضافه کنید
                            </h4>
                        </div>
                        <div className={classes.counter} >
                            <h4>
                            عدد
                            </h4>
                            <h3>
                            {eduContext.education.length}      
                            </h3>
                            <h4>
                           : مدارک ثبت شده 
                            </h4>
                        </div>
                        {
                            disabler ?
                            <Button className={classes.submitbtn} onClick={submitHandler} >
                            ثبت
                            </Button>
                            :
                            <Button className={classes.disablesubmitbtn} onClick={submitHandler} >
                            ثبت
                            </Button>
                        }
                        
                    </div>
                </div>
        </div>
    )
}
