import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarDays, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react'
import { faArrowUpWideShort,faEllipsisH, faObjectGroup, faPlus, faRepeat, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import styles from "./MyDay.module.scss";
import 'tippy.js/dist/tippy.css';

function MyDay(){
    const cx = className.bind(styles);
    // 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    var days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var today = new Date();
    var date = "ngày " + today.getDate() + " tháng " + (today.getMonth()+1);
    var dayName = days[today.getDay()];
    var real_time = dayName + ", " + date;
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
                <div className={cx('taskCreation')}>
                    <div className={cx('taskCreation_addTask')}>
                        <button className={cx('taskCreation_addTaskBtn')} type='button' aria-label='Thêm tác vụ' tabIndex='0'>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </button>
                        <input className={cx('taskCreation_addTaskInput')} type='text' maxLength='255' placeholder='Thêm tác vụ'></input>
                    </div>
                    <div className={cx('taskCreation_MenuControl')}>
                          <div className={cx('taskCreation_MenuList')}>
                                <ul>
                                    <Tippy content='Thêm ngày đến hạn'>
                                        <li><FontAwesomeIcon icon={faCalendarDays}>
                                            </FontAwesomeIcon>
                                        </li>
                                    </Tippy>
                                    <Tippy content='Nhắc tôi'>
                                        <li><FontAwesomeIcon icon={faBell}>
                                            </FontAwesomeIcon>
                                        </li>
                                    </Tippy>
                                    <Tippy content="Lặp lại">
                                        <li><FontAwesomeIcon icon={faRepeat}>
                                            </FontAwesomeIcon>
                                        </li>
                                    </Tippy>
                                </ul>
                          </div>
                          <div className={cx('btnAddTask')}>
                            <button type='button' aria-label='Thêm'>Thêm</button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyDay;