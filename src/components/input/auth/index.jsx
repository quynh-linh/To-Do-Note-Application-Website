import { useEffect, useState} from "react";
import className from 'classnames/bind';
import styles from '../input.module.scss'
function AuthInput({isCheckError=false,validInput=undefined,typeInput='',nameInput='',placeholder='',localStorageValue}) {
    const cx = className.bind(styles);
    const [inputValue,setInputValue] = useState('');
    //
    const handleInputEmailChange = (event) => {
        console.log('onChange',isCheckError);
        setInputValue(event.target.value);
    };

    //
    const handleBlurInputChange = (event) => {
        validInput(event.target.value);
    };

    //
    const handleInputPassChange = (event) => {
        const pass = event.target.value;
        setInputValue(pass);
        validInput(pass);
    };  
    
    // const validateEmail = (inputEmail) => {
    //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //     if(!emailPattern.test(inputEmail)){
    //         setValidError('Vui lòng nhập một địa chỉ email hợp lệ');
    //     } else {
    //         setValidError('');
    //     }  
    // };

    //
    const itemClassesInputEmail = className(styles['wrapper-input'], {
        [styles.selected]: isCheckError,
    });

    return (  
        <input
            name={nameInput}
            type={typeInput}
            value={inputValue ? inputValue : localStorageValue} 
            autoComplete={typeInput === 'password' ? 'new-password' : ''}
            onChange={typeInput === 'email' ? handleInputEmailChange : handleInputPassChange} 
            onBlur={handleBlurInputChange}
            className={cx(itemClassesInputEmail)} 
            placeholder={placeholder}
        >
        </input>
    );
}

export default AuthInput;