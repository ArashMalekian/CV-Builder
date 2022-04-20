import React ,{useState , useContext} from 'react'
import classes from './Education.module.scss'
import Select from 'react-select'
import { StatesContext } from '../../../../Contexts/StateContext';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
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
  const yearOptions = [
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
export const Education = () => {
    const [disabler, setDisabler] = useState(false)
    const stateContext = useContext(StatesContext)
    const cerContext = useContext(EducationCertification)
    const [certificates, setCertificates] = useState({
        edu:"",
        date:"",
        state:"",
        institute:"",
    })
    const inputChangeHandler = (event) => {
        setCertificates({...certificates , [event.target.name] : event.target.value });
    }
    const submitHandler = () => {
         cerContext.push(
             {
                 edu:certificates.edu,
                 institute:certificates.institute,
                 state:certificates.state,
                 dateOfGraduated:certificates.date,
             }
             )
    }
    const plusHandler = () => {
        cerContext.push(
            {
                edu:certificates.edu,
                institute:certificates.institute,
                state:certificates.state,
                dateOfGraduated:certificates.date,
            }
            )
         console.log(cerContext);
         setCertificates({...certificates,
             edu:"",
             date:"",
             state:"",
             institute:"",
         })
    }
    return (
<div className={classes.container} >
            <div className={classes.contacttitle} >
                <div className={classes.titlebox} >
                <h4>
                    دوره ها و گواهینامه ها
                </h4>
                </div>
            </div>
                <div className={classes.content} >
                <div className={classes.infobox} >
                    <div className={classes.p1} >

                    <input name='institution' type={'text'} placeholder="موسسه" className={classes.input} value={certificates.institute} onChange={inputChangeHandler} />
                        <input name='edu' type={'text'} placeholder="نام مدرک یا دوره" className={classes.input} value={certificates.edu} onChange={inputChangeHandler} />
 
                </div>
                <div className={classes.p2} >
                <Select
                styles={customStyles}
                options={yearOptions}
                placeholder="تاریخ اخذ "
                onChange={(event) => {
                    setCertificates({...certificates , date : event.value});
                }}
                />  
                <Select
                styles={customStyles}
                placeholder="استان"
                options={stateContext}
                onChange={(event) => {
                    setCertificates({...certificates , state : event.value});
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
                                اگر تمایل به ثبت موارد بیشتری دارید ، اضافه کنید
                            </h4>
                        </div>
                        <div className={classes.counter} >
                            <h4>
                            عدد
                            </h4>
                            <h3>
                            {cerContext.certification.length}       
                            </h3>
                            <h4>
                           : دوره ها و گواهینامه های  ثبت شده 
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
