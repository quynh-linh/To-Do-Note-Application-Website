import className from 'classnames/bind';
import { useRef, useState , useEffect } from 'react';

import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css';
import {Twitter , Facebook , GitHub } from '@mui/icons-material';
import images from '~/assets/images';
import InfoUser from './components/InfoUser/InfoUser';
import Drawer from './components/Drawer/Drawer';
import ToolControls from './components/ToolControls/ToolControls';
import ToggleSwitch from '~/components/Button/ToggleSwitch/ToggleSwitch';
import WhatNewsItem from './components/WhatNewsItem/WhatNewsItem';
function Header(){
    const cx = className.bind(styles);
    const dataSettings = [
        {
            id : 1,
            title : 'Tổng quát',
            item : [
                {
                    id : 1,
                    name : 'Xác nhận trước khi xóa',
                    status : false
                },
                {
                    id : 2,
                    name : 'Thêm tác vụ mới ở đầu',
                    status : false
                },
                {
                    id : 3,
                    name : 'Di chuyển tác vụ gắn dấu sao lên đầu',
                    status : false
                },
                {
                    id : 4,
                    name : 'Phát âm thanh hoàn thiện',
                    status : false
                },
                {
                    id : 5,
                    name : 'Hiển thị menu bấm chuột phải',
                    status : false
                },
                {
                    id : 6,
                    name : 'Bật thông báo nhắc nhở',
                    status : false
                },
                {
                    id : 7,
                    name : 'Bật chế độ ban đêm',
                    status : false
                }
            ]
        },
        {
            id : 2,
            title : 'Danh sách thông minh',
            item : [
                {
                    id : 1,
                    name : 'Quan trọng',
                    status : false
                },
                {
                    id : 2,
                    name : 'Đã lập kế hoạch',
                    status : false
                },
                {
                    id : 3,
                    name : 'Tất cả',
                    status : false
                },
                {
                    id : 4,
                    name : 'Đã hoàn thành',
                    status : false
                },
                {
                    id : 5,
                    name : 'Đã giao cho tôi',
                    status : false
                },
                {
                    id : 6,
                    name : 'Tự động ẩn danh sách thông minh trống',
                    status : false
                },
                {
                    id : 7,
                    name : 'Hiển thị các nhiệm vụ “Đến hạn vào hôm nay” trong Ngày của tôi',
                    status : false
                }
            ]
        },
        {
            id : 3,
            title : 'Ứng dụng được kết nối',
            item : [
                {
                    id : 1,
                    name : 'Planner',
                    description : 'Tác vụ giao cho bạn trong Planner',
                    status : false
                }
            ]
        },
        {
            id : 4,
            title : 'Thông báo',
            item : [
                {
                    id : 1,
                    name : 'Email',
                    description : 'Nhận thông báo khi một danh sách được chia sẻ với bạn',
                    status : false
                }
            ]
        }
    ]
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [numberControls, setNumberControls] = useState(0);
    const [isControls, setIsControls] = useState(false);
    const menuRef = useRef();
    const imgRef = useRef();

    const handleClickOutside = (event) => {
        const parentElement = event.target.closest('#menu-result');
        if (parentElement !== menuRef.current && event.target !== imgRef.current) {
            setMenuVisible(false);
        }
    };
    const itemClasses = className(styles['info-menu_user'], {
        [styles.selected]: isMenuVisible,
    });
    
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setNumberControls(0)
    };

    const handleClickControls = (item) => {
        setNumberControls(item)
        setIsControls(!isControls)
    }

    const handleCloseDrawer = () => {
        setNumberControls(0)
        setIsControls(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return(
        <div>
            <header className={cx('wrapper')}>
                <div  className={cx('wrapper-logo')} >
                    <img className={cx('logo')} src={images.logo} alt="logo"/>
                </div>
                <div className={cx('wrapper-right')}>
                    <div className={cx('wrapper-controls')}>
                        <span className={cx('wrapper-controls_search')} >
                            <input className={cx('input-search')} spellCheck="false" type="text" placeholder="Tìm kiếm" autoComplete="off"/>
                        </span>
                    </div>
                    <div className={cx('controls-menu')}>
                        <ul className={cx('controls-region')}>
                            <ToolControls isBool={isControls} isControls={setIsControls}  idNumber={numberControls} handleClick={handleClickControls}></ToolControls>
                        </ul>
                        <div className={cx('menu_user')}>
                            <div className={cx(itemClasses)} >
                                <img onClick={toggleMenu}  ref={imgRef} className={cx('controls-menu_user')} src={images.user} alt="user"/>
                            </div>
                            {
                                isMenuVisible && (
                                    <InfoUser menuRef={menuRef}></InfoUser>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
            {
                (numberControls === 1 && isControls) && (
                    <Drawer title="Cài đặt" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>
                            {
                                dataSettings.map((item,index) => {
                                    return (
                                        <div key={index} className={cx('wide-content')}>
                                            <h4 className={cx('wide-title')}>{item.title}</h4>
                                            <div className={cx('wide-list')}>
                                                {
                                                    item.item.map((item,index) =>{
                                                        return (
                                                            <div key={index} className={cx('wide-item')}>
                                                                <span className={cx('wide-item_name')}>{item.name}</span>
                                                                <ToggleSwitch></ToggleSwitch>
                                                                {item.hasOwnProperty('description') ? <div className={cx('wide-item_des')}>{item.description}</div> : ''}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    ) 
                                })
                            }
                            <div className={cx('wide-contact')}>
                                <h4 className={cx('wide-title')}>Kết nối</h4>
                                <div className={cx('wide-contact')}>
                                    <a href='https://twitter.com' className={cx('wide-link')}>
                                        <span className={cx('wide-twitter')}>
                                            <Twitter  className={cx('icon-twitter')}></Twitter>
                                        </span>
                                        <span className={cx('wide-label')}>Theo dõi chúng tôi trên Twitter</span>
                                    </a>
                                    <a href='https://twitter.com' className={cx('wide-link')}>
                                        <span className={cx('wide-face')}>
                                            <Facebook  className={cx('icon-face')}></Facebook>
                                        </span>
                                        <span className={cx('wide-label')}>Theo dõi chúng tôi trên Facebook</span>
                                    </a>
                                    <a href='https://twitter.com' className={cx('wide-link')}>
                                        <span className={cx('wide-github')}>
                                            <GitHub  className={cx('icon-github')}></GitHub>
                                        </span>
                                        <span className={cx('wide-label')}>Theo dõi chúng tôi trên Github</span>
                                    </a>
                                </div>  
                            </div>
                        </div>
                    </Drawer>
                )
            } 
            {
                (numberControls === 2 && isControls) && (
                    <Drawer title="Trợ giúp" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>

                        </div>
                    </Drawer>
                )
            } 
            {
                (numberControls === 3 && isControls) && (
                    <Drawer title="Có gì mới" onClose={handleCloseDrawer}>
                        <div className={cx('wide')}>
                            <WhatNewsItem></WhatNewsItem>
                        </div>
                    </Drawer>
                )
            } 
        </div>
    )
}
export default Header;