export const ContactValidate = (contact) => {
    const error = {};

    if ( contact.address.length === 0 ){
        error.address = ' نشانی خود را وارد کنید'
    }
    else{
        delete error.address ;
    }

    if(contact.mobileNumber.length === 0 ){
        error.mobileNumber = ' شماره تلفن همراه خود را وارد کنید'
    }
    else{
        delete error.mobileNumber;
    }



    return (
        error
    )
}