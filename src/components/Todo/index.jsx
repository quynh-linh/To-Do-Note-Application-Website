import className from 'classnames/bind';
import styles from './Todo.module.scss'
import { faBell, faCalendar, faCircle , faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Todo({title='',description='',valueDeadLine=null,valueNotify=null,valueRepeat=null,valuePriority=null,onClick=null}) {
    const cx = className.bind(styles);
    const [isClickTodo,setClickTodo] = useState(false);
    const [classNamePriority,setClassNamePriority] = useState('');
    // HANDLE CLICK TODO ITEM
    const handleClickTodo = () => {
        setClickTodo(true);
        onClick({
            state: true,
            title: title,
            deadLine: valueDeadLine,
            remind: valueNotify,
            repeat: valueRepeat,
            priority: valuePriority,
        });
    };
    useEffect(()=> {
        if(valuePriority === 'Danh mục đỏ'){
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-red');
        }else if(valuePriority === 'Danh mục cam') {
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-orange');
        }else if(valuePriority === 'Danh mục xanh') {
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-green');
        }
    },[]);
    return ( 
        <div className={cx('wrapper')} onClick={handleClickTodo}>
            <button  
                className={cx('wrapper__todo-check')}     
                type='button' 
                >
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
            </button>
            <div className={cx('wrapper__todo-content')}>
                <div className={cx('wrapper__todo-content-title')}>{title}</div>
                <ul className={cx('wrapper__todo-content-list')}>
                    <li className={cx('wrapper__todo-content-list__menuItem-task')}>Nhiệm vụ</li>
                    {
                        valueDeadLine.title ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-deadline')}>
                                <FontAwesomeIcon icon={faCalendar} className={cx('wrapper__todo-content-list__menuItem-deadline-menuItem-icon')}/>
                                {valueDeadLine.title}
                            </li>
                        ) : ''
                    }
                    {
                        valueNotify.title ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-notify')}>
                                <FontAwesomeIcon icon={faBell} className={cx('wrapper__todo-content-list__menuItem-notify-menuItem-icon')}/>
                                {valueNotify.title}
                            </li>
                        ) : ''
                    }
                    {
                        valueRepeat.state === true ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-repeat')}>
                                <FontAwesomeIcon icon={faRepeat} className={cx('wrapper__todo-content-list__menuItem-repeat-menuItem-icon')}/>
                            </li>
                        ) : ''
                    } 
                    {
                        valuePriority ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-priority')}>
                                <span className={cx(classNamePriority)}>
                                    {valuePriority}
                                </span>
                            </li>
                        ) : ''
                    } 
                </ul>
            </div>
            <div className={cx('wrapper__todo-priority')}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
        </div>
     );
}

export default Todo;