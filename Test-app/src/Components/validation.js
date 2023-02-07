const validateEmail = ({email, setEmailError}) => {
      const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

      return email && !email.match(emailRegular)? setEmailError("Email not valid" ): setEmailError("");

};

const validateName = ({name, setNameError})=> {
   
    return name && name.length < 5 ? setNameError("Name is too short")
    :name && name.length > 50 ? setNameError("Try to make short and meanfull")
    :setNameError("")
}


const validateText= ({text, setTextError})=> {
    
    return text && text.length < 3 ? setTextError("Message is too short")
    :text && text.length > 300 ? setTextError("Try to make short and meafull")
    :setTextError("");
}

export {validateEmail, validateName, validateText}