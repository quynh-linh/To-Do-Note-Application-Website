import { useState} from "react";
import className from 'classnames/bind';
import styles from '../input.module.scss'
import { Toast } from "~/components/toast";
function AuthInput({isCheckError=false,validInput=undefined,typeInput='',nameInput='',placeholder='',localStorageValue}) {
    const cx = className.bind(styles);
    const [inputValue,setInputValue] = useState('');
    //
    const handleInputEmailChange = (event) => {
        setInputValue(event.target.value);
        Toast({type:'error',title: 'Đăng nhập ',position:'top-right',autoClose:3000,limit:1,des:'function'});
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
        Toast({type:'error',title: 'Nhập mật khẩu',position:'top-right',autoClose:3000,limit:1,des:'function'});
    };  

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