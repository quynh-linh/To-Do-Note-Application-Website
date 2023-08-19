
import className from 'classnames/bind';
import styles from './Form.module.scss'
import { Wrapper } from '~/components/Popper';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { type } from '@testing-library/user-event/dist/type';
function Form({formType,title}) {
    const cx = className.bind(styles);
    const [isChangeByPhone,setChangeByPhone] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);
    const options = ['Option 1', 'Option 2', 'Option 3'];
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleChangeByPhone = () => {
        setChangeByPhone(!isChangeByPhone);
    }
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
        <form action='#' className={cx('wrapper')}>
            <Wrapper>
                <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-logo')}>
                        <img className={cx('logo')} src={images.logo_Second} alt='Logo'></img>
                    </div>
                    <div className={cx('wrapper-logo')}>{title}</div>
                    <div className={cx('wrapper-input')}>
                        {
                            isChangeByPhone ? (
                                <div>
                                    <select value={selectedOption} onChange={handleOptionChange}>
                                        {data.map((option, index) => (
                                        <option key={index} value={option.dial_code}>
                                            {option.name + ' ' + option.dial_code}
                                        </option>
                                        ))}
                                    </select>
                                    <input placeholder='Số điện thoại'></input>
                                </div>
                            ) : (
                                <input placeholder={formType === 'login' ? 'Email, Điện thoại hoặc Skype' : 'abc@example.com'}></input>
                            )
                        }
                    </div>
                    {
                        formType === 'login' && (
                            <div>
                                <div className={cx('question-register')}>
                                    <p>Bạn không có tài khoản?</p>
                                    <Link className={cx('to-register')} to='/register'>
                                        Hãy tạo tài khoản!
                                    </Link>
                                </div>
                                <div className={cx('new-email')}> Bạn không truy cập vào được tài khoản?</div>
                            </div>
                        )
                    }
                    {
                        formType === 'register' ? (
                            isChangeByPhone ? (                              
                                <div onClick={handleChangeByPhone} className={cx('changeTo-phone')}>Sử dụng email thay vào đó</div>
                            ) : 
                            (
                                <div>
                                    <div onClick={handleChangeByPhone} className={cx('changeTo-phone')}>Sử dụng số điện thoại thay vào đó</div>
                                    <div className={cx('new-email')}> Bạn không truy cập vào được tài khoản?</div>
                                </div>
                            )
                        ) :
                        (
                            ''
                        )
                    }
                    <div className={cx('wrapper-btn')}>
                        <button type='submit'>Tiếp theo</button>
                    </div>
                </div>
            </Wrapper>
        </form>
    );
}

export default Form;