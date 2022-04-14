export const PersonalValidate = (personal) => {
    const error = {};

    if ( personal.name.length === 0 ){
        error.name = ' نام خود را وارد کنید'
    }
    else{
        delete error.name ;
    }

    if(personal.lName.length === 0 ){
        error.lName = 'نام خانوادگی خود  را وارد کنید'
    }
    else{
        delete error.lName;
    }

    if(personal.DOB.length === 0 ){
        error.DOB = 'تاریخ تولد خود را وارد کنید'
    }
    else{
        delete error.DOB ;
    }

    if(personal.job.length === 0){
        error.job = 'حرفه خود را وارد کنید'
    }
    else{
        delete error.job;
    }



    return (
        error
    )
}