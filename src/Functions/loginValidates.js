export const loginValidate = (phone) => {
    const error = {};

    if ( phone.length === 0 ){
        error.err = 'شماره تلفن خود را وارد کنید'
    }
    else if ( phone.length < 11 || phone.length > 11  ){
        error.err =  "شماره تلفن معتبر نمیباشد"
    }

      else {
         delete error.err ;
      }

    return (
        error
    )
}