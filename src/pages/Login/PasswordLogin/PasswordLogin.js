import className from 'classnames/bind';
import Form from '~/components/Form/Form';
import styles from './PasswordLogin.module.scss';
function PassWordLogin() {
    const cx = className.bind(styles);
    return (  
        <Form title={'Nhập mật khẩu'}>
            <div className={cx('new-email')}>Quên mật khẩu?</div>
        </Form>
    );
}

export default PassWordLogin;