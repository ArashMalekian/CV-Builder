import React , {useState  , useContext} from 'react'
import classes from './AbilityContent.module.scss'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import { abilitiesContext } from '../../../../Contexts/AbilityContext';

const labels = {
  1: 'ضعیف',
  2: 'مبتدی',
  3: 'متوسط',
  4: 'خوب',
  5: 'مسلط', 
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
export const AbilityContent = () => {
    const context = useContext(abilitiesContext)

    const [lang, setLang] = useState()
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    const submitHandler = () => {
        context.language.push(
            {
                language:lang,
                rate:value,
            }
        )
        setLang("")
        setValue(0)
        console.log(context);
    }
    return (
        <div className={classes.container} >
        <div className={classes.contacttitle} >
            <div className={classes.titlebox} >
            </div>
        </div>
        <div className={classes.content} >
            <div className={classes.languagebox} >
                <h3>
                    زبان
                </h3>
                <div className={classes.languageitem} >
                <div className={classes.inputbox} >
                    <input type={'text'} placeholder="زبان مورد نظر" className={classes.input} value={lang} onChange={(event) => {
                        setLang(event.target.value)
                    }} />
                <div className={classes.ratingbox} >
                    {value !== null && (
                      <h4 >{labels[hover !== -1 ? hover : value]}</h4>
                    )}
                <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
          console.log(hover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
                </div>
            </div>
            <Button className={classes.submitbtn} onClick={submitHandler} >
                ثبت
            </Button>
            </div>
            <div className={classes.seelanguages} >
                {
                    context.language.map(item => 
                        <div className={classes.seelangitem} >
                            <h4>
                                {item.language}
                            </h4>
                            <Rating readOnly value={item.rate} />
                        </div>
                    )
                }
            </div>
            </div>
            <div className={classes.abilitybox} >

            </div>
        </div>
        </div>
    )
}
