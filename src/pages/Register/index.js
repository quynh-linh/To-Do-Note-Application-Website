import { useState , useEffect } from "react";
import className from 'classnames/bind';
import styles from './Register.module.scss'
import Form from "~/components/Form/Form";
import AuthInput from "~/components/input/auth";
function Register() {
    const cx = className.bind(styles);
    const [isChangeByPhone,setChangeByPhone] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [inputEmailValue,setInputEmailValue] = useState('');
    const [inputPassValue,setInputPassValue] = useState('');
    const [inputConfirmPassValue,setInputConfirmPasslValue] = useState('');
    const [isValidError, setValidError] = useState('');  
    const [data, setData] = useState([]);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleChangeByPhone = () => {
        setChangeByPhone(!isChangeByPhone);
    }
    const handleClickToPassWordLogin = () => {
        if(inputEmailValue === ''){
            setValidError('Cần nhập địa chỉ email');
        }
    };
    // CALL COUNTRY API
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error reading JSON:', error);
          }
        };
        fetchData();
    }, []);
    return ( 
        <Form formType={'register'} title={'Tạo tài khoản'}>
            <div>
                <input className={cx('input-yourName')} placeholder="Nhập tên của bạn"></input>
            </div>
            <div className={cx('wrapper-input')}>
                {
                    isChangeByPhone ? (
                        <div className={cx('wrapper-select')}>
                            <select className={cx('wrapper-select_country')} value={selectedOption} onChange={handleOptionChange}>
                                {selectedOption ? <option value={selectedOption}>{selectedOption}</option> : <option>+84</option>}
                                {data.map((option, index) => (
                                <option key={index} value={option.dial_code}>
                                    {option.name + ' ' + option.dial_code}
                                </option>
                                ))}
                            </select>
                            <input id='inputPhone' className={cx('wrapper-input-phone')} placeholder='Nhập số điện thoại'></input>
                        </div>
                    ) : (
                        <div>
                            <div className={cx('error-text')}>
                                {isValidError}
                            </div>
                            <AuthInput
                                typeInput="email"
                                placeholder="Nhập email (VD: abc@example)"
                                validError={(e) => setValidError(e)}
                                validInput={(e) => setInputEmailValue(e)}
                                checkEmail={(e) => setIsValidEmail(e)}
                            />
                        </div>
                    )
                }
            </div>
            {
                isChangeByPhone ? (                              
                    <div onClick={handleChangeByPhone} className={cx('changeTo-phone')}>Sử dụng email thay vào đó</div>
                ) : 
                (
                    <div>
                        <div onClick={handleChangeByPhone} className={cx('changeTo-phone')}>Sử dụng số điện thoại thay vào đó</div>
                    </div>
                )
            }
            <div>
                <AuthInput
                    typeInput="password"
                    placeholder="Nhập mật khẩu"
                    validError={(e) => setValidError(e)}
                    validInput={(e) => setInputPassValue(e)}
                />
            </div>
            <div>
                <AuthInput
                    typeInput="password"
                    placeholder="Nhập lại mật khẩu"
                    validInput={(e) => setInputConfirmPasslValue(e)}
                />
            </div>
            <div className={cx('wrapper-btn')}>
                <button type='button' onClick={handleClickToPassWordLogin}>Tiếp theo</button>
            </div>
        </Form>
    );
}

export default Register;