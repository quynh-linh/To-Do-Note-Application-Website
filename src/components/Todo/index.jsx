import className from 'classnames/bind';
import styles from './Todo.module.scss'
import { faBell, faCalendar, faCircle , faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Todo({title='',description='',valueDeadLine='',valueNotify='',valueRepeat='',valuePriority='',onClick=null}) {
    const cx = className.bind(styles);
    const [isClickTodo,setClickTodo] = useState(false);
    // HANDLE CLICK TODO ITEM
    const handleClickTodo = () => {
        setClickTodo(true);
        onClick(true);
    };
    return ( 
        <div className={cx('wrapper')} onClick={handleClickTodo}>
            <button 
                id='taskCreation_addTaskBtn' 
                className={cx('todo-check')}     
                type='button' 
                >
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            </button>
            <div className={cx('todo-content')}>
                <div className={cx('todo-title')}>{title}</div>
                <ul className={cx('menuItem-list')}>
                    <li className={cx('menuItem-task')}>Nhiệm vụ</li>
                    {
                        valueDeadLine && (
                            <li className={cx('menuItem-deadline')}>
                                <FontAwesomeIcon icon={faCalendar} className={cx('menuItem-icon')}/>
                                {valueDeadLine}
                            </li>
                        )
                    }
                    {
                        valueNotify && (
                            <li className={cx('menuItem-notify')}>
                                <FontAwesomeIcon icon={faBell} className={cx('menuItem-icon')}/>
                                {valueNotify}
                            </li>
                        )
                    }
                    {
                        valueRepeat && (
                            <li className={cx('menuItem-repeat')}>
                                <FontAwesomeIcon icon={faRepeat} className={cx('menuItem-icon')}/>
                            </li>
                        )
                    } 
                    {
                        valuePriority && (
                            <li className={cx('menuItem-priority')}>
                                <FontAwesomeIcon icon={faCircle} className={cx('menuItem-icon')}/>
                                {valuePriority}
                            </li>
                        )
                    } 
                </ul>
            </div>
            <div className={cx('todo-priority')}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
        </div>
     );
}

export default Todo;