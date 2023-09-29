import className from 'classnames/bind';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';
function Footer() {
    const cx = className.bind(styles);
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-row')}>
                <div className={cx('wrapper-group')}>
                    <h4>Có gì mới không</h4>
                    <ul>
                        <li>Surface Laptop Studio 2</li>
                        <li>Surface Laptop Go 3</li>
                        <li>Máy tính xách tay bề mặt 5</li>
                        <li>Copilot trong Windows</li>
                        <li>Ứng dụng Windows 11</li>
                        <li>Surface Pro 9</li>
                    </ul>
                </div>
                <div className={cx('wrapper-group')}>
                    <h4>Cửa hàng</h4>
                    <ul>
                        <li>Hồ sơ tài khoản</li>
                        <li>Trung tâm Tải xuống</li>
                        <li>Hỗ trợ Todo Store</li>
                        <li>Theo dõi đơn hàng</li>
                        <li>Lời hứa của Microsoft Store</li>
                        <li>Thanh toán linh hoạt</li>
                    </ul>
                </div>
                <div className={cx('wrapper-group')}>
                    <h4>Giáo dục</h4>
                    <ul>
                        <li>Làm thế nào để mua cho trường học của bạn</li>
                        <li>Đào tạo và phát triển nhà giáo dục</li>
                        <li>Ưu đãi cho học sinh và phụ huynh</li>
                        <li>Azure dành cho sinh viên</li>
                        <li>Todo 365 Education</li>
                        <li>Thiết bị cho giáo dục</li>
                    </ul>
                </div>
                <div className={cx('wrapper-group')}>
                    <h4>Kinh doanh</h4>
                    <ul>
                        <li>Đám mây Todo</li>
                        <li>Bảo mật của Todo</li>
                        <li>Todo 365</li>
                        <li>Todo Power Platform</li>
                        <li>Nhóm Todo</li>
                        <li>Công nghiệp Todo</li>
                    </ul>
                </div>
                <div className={cx('wrapper-group')}>
                    <h4>Nhà phát triển &; CNTT</h4>
                    <ul>
                        <li>Trung tâm nhà phát triển</li>
                        <li>Tìm hiểu của Todo</li>
                        <li>Cộng đồng Kỹ thuật </li>
                        <li>Thị trường Azure</li>
                        <li>Nguồn ứng dụng</li>
                        <li>Visual Studio</li>
                    </ul>
                </div>
                <div className={cx('wrapper-group')}>
                    <h4>Công ty</h4>
                    <ul>
                        <li>Nghề nghiệp</li>
                        <li>Giới thiệu về Microsoft</li>
                        <li>Tin tức công ty</li>
                        <li>Quyền riêng tư tại Microsoft</li>
                        <li>Nhà đầu tư</li>
                        <li>Tính bền vững</li>
                    </ul>
                </div>
            </div>
            <div className={cx('wrapper-row')}>
                <div className={cx('wrapper-row-contact')}>
                    <p className={cx('wrapper-row-contact-title')}>Liên hệ với tôi thông qua</p>
                    <div className={cx('wrapper-row-contact-list')}>
                        <Link to={'https://github.com/Quynh-Linh-IT'}>
                            <GitHubIcon className={cx('wrapper-row-contact-list__IconGit')}/>
                        </Link>
                        <Link to={'https://www.facebook.com/quynhlinh2106'}>
                            <FacebookIcon className={cx('wrapper-row-contact-list__IconFace')}/>
                        </Link>
                        <Link to={''}>
                            <TwitterIcon className={cx('wrapper-row-contact-list__IconTwitter')}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;