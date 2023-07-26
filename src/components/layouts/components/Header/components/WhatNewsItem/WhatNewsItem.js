import className from 'classnames/bind';
import styles from './WhatNewsItem.module.scss'
import images from '~/assets/images';
import {Android , Apple} from '@mui/icons-material';
function WhatNewsItem() {
    const cx = className.bind(styles);
    const data = [
        {
            id : 1,
            name : 'Bây giờ bạn có thể thay đổi chủ đề Chế độ tối từ cài đặt!',
            image : images.logo
        },
        {
            id : 2,
            name : 'Bây giờ bạn có thể thay đổi kích thước ngăn chi tiết của mình bằng cách kéo cạnh ngăn!!',
            image : images.logo
        }
    ]
    return (
        <div className={cx('wrapper')}>
            {
                data.map((item,index) =>{
                    return (
                        <div key={index} className={cx('wrapper-content')}>
                            <img className={cx('wrapper-img')} src={item.image}></img>
                            <p className={cx('wrapper-title')}>{item.name}</p>
                            <button className={cx('wrapper-btn')}>Dùng thử</button>
                        </div>
                    )
                })
            }
            <div className={cx('wrapper-footer')}>
                <span className={cx('wrapper-footer_title')}>Tải ứng dụng xuống</span>
                <span className={cx('wrapper-footer_list')}>
                    <Apple className={cx('wide-icon')}></Apple>
                    <Android className={cx('wide-icon')}></Android>
                </span>
            </div>
        </div>
    )
}
export default WhatNewsItem;