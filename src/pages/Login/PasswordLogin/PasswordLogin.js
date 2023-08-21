import className from 'classnames/bind';
import Form from '~/components/Form/Form';
import styles from './PasswordLogin.module.scss';
import InputAccountManagement  from '~/components/input/InputAccountManagement';
import { useState } from 'react';
function PassWordLogin() {
    const cx = className.bind(styles);
    const [isValidError, setValidError] = useState('');
    const [inputPasswordValue,setInputPasswordValue] = useState('');
    const handleClickLogin = () => {
        if(inputPasswordValue !== ''){
            
        } else {
            setValidError('Cần nhập mật khẩu Todo của bạn!');
        }
    };
    const handleChangeError = (event) => {
        setValidError(event);
    };
    const handleValidInput = (event) => {
        setInputPasswordValue(event);
    };
    return (  
        <Form title={'Nhập mật khẩu'} validError={isValidError}>
            <InputAccountManagement validError={handleChangeError} validInput={handleValidInput} placeholder={'Mật khẩu'}/>
            <div className={cx('forgot-password')}>Quên mật khẩu?</div>
            <div className={cx('wrapper-btn')}>
                <button onClick={handleClickLogin} type='submit' >Đăng nhập</button>
            </div>
        </Form>
    );
}

export default PassWordLogin;