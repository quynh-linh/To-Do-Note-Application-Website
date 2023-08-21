import { useState} from "react";
import className from 'classnames/bind';
import styles from '../input.module.scss'
function InputAccountManagement({placeholder='',validError,validInput,checkEmail}) {
    const cx = className.bind(styles);
    const [inputEmailValue,setInputEmailValue] = useState('');
    const [isValidError, setValidError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const handleInputEmailChange = (event) => {
        const newEmail = event.target.value;
        setInputEmailValue(newEmail);
        validateEmail(newEmail);
        validError(isValidError);
        validInput(inputEmailValue);
        checkEmail(isValidEmail)
    };
    const validateEmail = (inputEmail) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailPattern.test(inputEmail)){
            setValidError('Vui lòng nhập một địa chỉ email hợp lệ');
        } else {
            setValidError('');
            setIsValidEmail(emailPattern.test(inputEmail));
            console.log(isValidEmail);
        }
    };
    const itemClassesInputEmail = className(styles['wrapper-input'], {
        [styles.selected]: isValidError,
    });
    return (  
        <input 
            value={inputEmailValue} 
            onChange={handleInputEmailChange} 
            className={cx(itemClassesInputEmail)} 
            placeholder={placeholder}>
        </input>
    );
}

export default InputAccountManagement;