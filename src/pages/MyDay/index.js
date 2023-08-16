import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarDays, faCircle, faClock, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react'
import { useState} from 'react';
import { faArrowUpWideShort,faEllipsisH, faObjectGroup, faPlus, faRepeat, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import styles from "./MyDay.module.scss";
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import Toolbar from '~/components/Popper/Toolbar';
function MyDay(){
    const cx = className.bind(styles);
    const [isInputFocused, setInputFocused] = useState(false);
    const [isBtnDeadline, setBtnDeadline] = useState(false);
    const [isBtnRemind, setBtnRemind] = useState(false);
    const [isBtnRepeat, setBtnRepeat] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [valueMenuDeadline, setValueMenuDeadline] = useState('');
    const [valueMenuRemind, setValueMenuRemind] = useState('');
    const [valueMenuRepeat, setValueMenuRepeat] = useState('');
    var today = new Date();

    const MENU_ITEMS_DEADLINE = [
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
    const MENU_ITEMS_REMIND = [
        {
            id : 1,
            icon : faClock,
            title : 'Cuối ngày',
            day  : 'T3'
        },
        {
            id : 2,
            icon : faClock,
            title : 'Ngày mai',
            day  : 'T4'
        },
        {
            id : 3,
            icon : faClock,
            title : 'Tuần tới',
            day  : 'T2'
        }
    ];
    const MENU_ITEMS_REPEAT = [
        {
            id : 1,
            icon : faCalendarDays,
            title : 'Hằng ngày',
            day  : 'T3'
        },
        {
            id : 2,
            icon : faCalendarDays,
            title : 'Ngày trong tuần',
            day  : 'T4'
        },
        {
            id : 3,
            icon : faCalendarDays,
            title : 'Hằng tuần',
            day  : 'T2'
        },
        {
            id : 3,
            icon : faCalendarDays,
            title : 'Hằng tháng',
            day  : 'T2'
        },
        {
            id : 3,
            icon : faCalendarDays,
            title : 'Hằng năm',
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

    // status bar click event when creating reminder

    const handleClickButtonDeadline = () => {
        setBtnDeadline(!isBtnDeadline);
        setBtnRemind(false);
        setBtnRepeat(false);
    };

    const handleClickButtonRemind = () => {
        setBtnRemind(!isBtnRemind);
        setBtnDeadline(false);
        setBtnRepeat(false);
    };

    const handleClickButtonRepeat = () => {
        setBtnRepeat(!isBtnRepeat);
        setBtnRemind(false);
        setBtnDeadline(false);
    };

    //

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
                            <Toolbar
                                title={'Sắp xếp'}
                            >
                                <li>
                                    <FontAwesomeIcon icon={faArrowUpWideShort}></FontAwesomeIcon>
                                    <span>Sắp xếp</span>
                                </li>
                            </Toolbar>
                            <Toolbar
                                title={'Nhóm'}
                            >
                                <li>
                                    <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                    <span>Nhóm</span>
                                </li>
                            </Toolbar>
                            <Toolbar
                                title={'Đề xuất'}
                            >
                                <li>
                                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                                    <span>Đề xuất</span>
                                </li>
                            </Toolbar>
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
                                    <Menu 
                                        title = {'Đến hạn'}
                                        state={isBtnDeadline}
                                        items = {MENU_ITEMS_DEADLINE}
                                        checkValue = {valueMenuDeadline ? true : false}
                                        handleCLick = {(item) => {
                                            setValueMenuDeadline(item);
                                            setBtnDeadline(false);
                                        }}
                                    >
                                        <button onClick={handleClickButtonDeadline} className={cx(valueMenuDeadline ? 'btnMenuItemTaskCreationCheck' : 'btnMenuItemTaskCreation')}>
                                            <FontAwesomeIcon icon={faCalendarDays}/>
                                            {valueMenuDeadline ? ' ' + valueMenuDeadline : ''}
                                        </button>
                                    </Menu>
                                    <Menu 
                                        title = {'Nhắc nhở'}
                                        state={isBtnRemind}
                                        items = {MENU_ITEMS_REMIND}
                                        checkValue = {valueMenuRemind ? true : false}
                                        handleCLick = {(item) => {
                                            setValueMenuRemind(item);
                                            setBtnRemind(false);
                                        }}
                                    >
                                        <button onClick={handleClickButtonRemind} className={cx(valueMenuRemind ? 'btnMenuItemTaskCreationCheck' : 'btnMenuItemTaskCreation')}>
                                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                            {valueMenuRemind ? ' ' + valueMenuRemind : ''}
                                        </button>
                                    </Menu>
                                    <Menu 
                                        title = {'Lặp lại'}
                                        state={isBtnRepeat}
                                        items = {MENU_ITEMS_REPEAT}
                                        checkValue = {valueMenuRepeat ? true : false}
                                        handleCLick = {(item) => {
                                            setValueMenuRepeat(item);
                                            setBtnRepeat(false);
                                        }}
                                    >
                                        <button onClick={handleClickButtonRepeat} className={cx(valueMenuRepeat ? 'btnMenuItemTaskCreationCheck' : 'btnMenuItemTaskCreation')}>
                                            <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
                                            {valueMenuRepeat ? ' ' + valueMenuRepeat : ''}
                                        </button>
                                    </Menu>
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