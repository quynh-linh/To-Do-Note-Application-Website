import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarDays, faCircle, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react'
import { useState} from 'react';
import { faArrowUpWideShort,faEllipsisH, faObjectGroup, faPlus, faRepeat, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import styles from "./MyDay.module.scss";
import 'tippy.js/dist/tippy.css';
import { MenuListComposition } from '~/components/Menu';
function MyDay(){
    const cx = className.bind(styles);
    const [isInputFocused, setInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    var today = new Date();

    const dataDeadline = [
        {
            id : 1,
            icon : faCalendarDays,
            title : 'Hôm nay',
            day  : 'T3'
        },
        {
            id : 2,
            icon : faCalendarDays,
            title : 'Ngày mai',
            day  : 'T4'
        },
        {
            id : 3,
            icon : faCalendarDays,
            title : 'Tuần tới',
            day  : 'T2'
        }
    ];
    var days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var date = "ngày " + today.getDate() + " tháng " + (today.getMonth()+1);
    var dayName = days[today.getDay()];
    var real_time = dayName + ", " + date;

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputChange = (event) => {
        setInputFocused(true);
        setInputValue(event.target.value);
    };

    return (
        <div className={cx('wrapper')}> 
            <div className={cx('header')}>
                <div className={cx('wrapper-header')}>
                    <span className={cx('wrapper-header_left')}>
                        <ul className={cx('wrapper-header_list')} >
                            <li>
                                <FontAwesomeIcon className={cx('wrapper-header_list-icon')} icon={faUmbrellaBeach}></FontAwesomeIcon>
                            </li>
                            <li>
                                <h4 className={cx('wrapper-header_list-title')}>Ngày của tôi</h4>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('wrapper-header_list-icon')} icon={faEllipsisH}></FontAwesomeIcon>
                            </li>
                        </ul>
                    </span>
                    <span className={cx('wrapper-header_right')}>
                        <ul className={cx('wrapper-header_control')} >
                            <Tippy content="Sắp xếp">
                                <li>
                                    <FontAwesomeIcon icon={faArrowUpWideShort}></FontAwesomeIcon>
                                    <span>Sắp xếp</span>
                                </li>
                             </Tippy>
                            <Tippy content="Nhóm">
                                <li>
                                    <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                    <span>Nhóm</span>
                                </li>
                            </Tippy>
                            <Tippy content="Đề xuất">
                                <li>
                                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                                    <span>Đề xuất</span>
                                </li>
                            </Tippy>
                        </ul>
                    </span>
                </div>
                <p className={cx('wrapper-header_real-time')}>{real_time}</p>
            </div>
            <div className={cx('container')}>
                <div  className={cx('taskCreation')}>
                    <div className={cx('taskCreation_addTask')}>
                        <button 
                            onClick={handleInputFocus} 
                            id='taskCreation_addTaskBtn' 
                            className={cx('taskCreation_addTaskBtn')} 
                            type='button' 
                            aria-label='Thêm tác vụ' 
                            tabIndex='0'>
                            <FontAwesomeIcon icon={isInputFocused ? faCircle : faPlus}></FontAwesomeIcon>
                        </button>
                        <input 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            onClick={handleInputFocus} 
                            className={cx('taskCreation_addTaskInput')} 
                            type='text' 
                            maxLength='255' 
                            placeholder='Thêm tác vụ'></input>
                    </div>
                    {
                        isInputFocused && (
                            <div id='taskCreation_MenuControl'  className={cx('taskCreation_MenuControl')}>
                                <div className={cx('taskCreation_MenuList')}>
                                        <ul>
                                            <Tippy content='Thêm ngày đến hạn'>
                                                <li>
                                                    <MenuListComposition title="Đến hạn" icon={faCalendarDays} data={dataDeadline}></MenuListComposition>
                                                </li>
                                            </Tippy>
                                            <Tippy content='Nhắc tôi'>
                                                <li>
                                                    <MenuListComposition title="Nhắc nhở" icon={faBell} data={dataDeadline}></MenuListComposition>
                                                </li>
                                            </Tippy>
                                            <Tippy content="Lặp lại">
                                                <li>
                                                    <MenuListComposition icon={faRepeat} data={dataDeadline}></MenuListComposition>
                                                </li>
                                            </Tippy>
                                        </ul>
                                </div>
                                <div className={cx('btnAddTask')}>
                                    <button type='button' aria-label='Thêm' disabled={inputValue.length === 0 ? true : false}>Thêm</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default MyDay;