import className from 'classnames/bind';
import styles from './Home.module.scss'
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const cx = className.bind(styles);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <img className={cx('welcome-Left')} src={images.welcomeLeft} alt="welcome left"/>
                </div>
                <div className={cx('content-center')}>
                    <div className={cx('center-logo')}>
                        <img src={images.ql} alt="welcome left"/>
                    </div>
                    <div className={cx('center-title')}><h1>Quynh Linh Todo</h1></div>
                    <div className={cx('center-des')}>
                        <p>To Do mang đến cho bạn sự tập trung, 
                            <br/>
                            từ công việc cho đến giải trí.
                        </p>
                    </div>
                    <div className={cx('center-starts')}>
                        <button type='submit'><span>Bắt đầu</span></button>
                        <Link to='/overview'>
                            <div className={cx('center-outMore')}>Tìm hiểu thêm</div>
                        </Link>
                    </div>
                    <div className={cx('center-download')}>
                        <div className={cx('download-title')}>Tải xuống To Do</div>
                        <ul>
                            <li>
                                <img className={cx('download-icon')} src={images.android} alt="welcome right"/>
                            </li>
                            <li>
                                <img className={cx('download-icon')} src={images.apple} alt="welcome right"/>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('download-icon_window')} icon={faWindowRestore}></FontAwesomeIcon>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <img className={cx('welcome-Right')} src={images.welcomeRight} alt="welcome right"/>
                </div>
            </div>
        </div>
    );
}

export default Home;