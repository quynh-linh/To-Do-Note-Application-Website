import { useEffect, useState} from "react";
import className from 'classnames/bind';
import styles from '../input.module.scss'
function AuthInput({validError=null,validInput=null,checkEmail=null,typeInput='',nameInput='',placeholder=''}) {
    const cx = className.bind(styles);
    const [inputValue,setInputValue] = useState('');
    const [isValidError, setValidError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const handleInputEmailChange = (event) => {
        setInputValue(event.target.value);
        
        setValidError('');
        // checkEmail(isValidEmail);
        // validInput(email);
        //validError(isValidError);
    };
    const handleBlurInputChange = (event) => {
        const email = event.target.value;
        console.log('Blur:'+event.target.value);
        validateEmail(event.target.value);
        validInput(email);
        checkEmail(isValidEmail);
        console.log(isValidError);
        validError(isValidError);
    };
    useEffect(() => {
        
    })
    const handleInputPassChange = (event) => {
        const pass = event.target.value;
        setInputValue(pass);
        validInput(pass);
        validError(isValidError);
    };
    const validateEmail = (inputEmail) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(inputEmail === ''){
            setValidError('Cần nhập địa chỉ email');
        } else {
            if(!emailPattern.test(inputEmail)){
                setValidError('Vui lòng nhập một địa chỉ email hợp lệ');
            } else {
                setValidError('');
                setIsValidEmail(emailPattern.test(inputEmail));
            }
        }   
    };
    const itemClassesInputEmail = className(styles['wrapper-input'], {
        [styles.selected]: isValidError.length > 0,
    });
    return (  
        <input
            name={nameInput}
            type={typeInput}
            value={inputValue} 
            autoComplete={typeInput === 'password' ? 'new-password' : ''}
            onInput={typeInput === 'email' ? handleInputEmailChange : handleInputPassChange} 
            onBlur={handleBlurInputChange}
            className={cx(itemClassesInputEmail)} 
            placeholder={placeholder}
        >
        </input>
    );
}

export default AuthInput;