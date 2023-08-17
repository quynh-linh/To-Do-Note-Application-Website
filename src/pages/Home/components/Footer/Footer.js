import className from 'classnames/bind';
import styles from './Footer.module.scss'
function Footer() {
    const cx = className.bind(styles);
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-row')}>
                <div className={cx('wrapper-group')}>
                    <h6>My Footer</h6>
                    <ul>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                        <li>Surface Pro 9</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;