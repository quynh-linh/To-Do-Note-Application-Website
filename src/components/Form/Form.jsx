
import className from 'classnames/bind';
import styles from './Form.module.scss'
import { Wrapper } from '~/components/Popper';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
function Form({children,title='',validError='',method=''}) {
    const cx = className.bind(styles);
    return ( 
        <form method={method} className={cx('wrapper')}>
            <Wrapper>
                <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-logo')}>
                        <Link to='/'><img className={cx('logo')} src={images.logo_Second} alt='Logo'></img></Link>
                    </div>
                    <div className={cx('wrapper-logo')}>{title}</div>
                    <div className={cx('wrapper-error')}>{validError}</div>             
                    {children}
                </div>
            </Wrapper>
        </form>
    );
}

export default Form;