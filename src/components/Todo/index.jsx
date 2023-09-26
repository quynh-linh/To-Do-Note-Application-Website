import className from 'classnames/bind';
import styles from './Todo.module.scss'
import { faBell, faCalendar, faCircle , faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Todo({id,type='',title='',valueDeadLine={},valueNotify={},valueRepeat={},valuePriority={},onClick={},completedTodo={},unCompletedTodo={}}) {
    const cx = className.bind(styles);
    const [classNamePriority,setClassNamePriority] = useState('');
    const [classNameTitleTodo,setClassNameTitleTodo] = useState('');
    // HANDLE CLICK TODO ITEM
    const handleClickTodo = () => {
        onClick({
            state:true,
            id:id,
            title: title,
            deadLine: valueDeadLine,
            remind: valueNotify,
            repeat: valueRepeat,
            priority: valuePriority,
            type: type === 'completed' ? 'completed' : 'waiting',
        });
    };
    
    // HANDLE WHEN USER CLICK BUTTON RADIO CHECK THEN PASS OVER LIST_TODO_COMPLETED
    const handleClickTodoCompleted =() => {
        if(type === 'waiting'){
            const addTodoCompleted = {
                id: id,
                title: title,
                status: 'completed',
                des: '',
                priority : valuePriority,
                notes : '',
                deadLine : {
                    title : valueDeadLine.title,
                    date : valueDeadLine.date
                },
                repeat : {
                    state :valueRepeat.state,
                    title : valueRepeat.title
                },
                notify : {
                    title : valueNotify.title,
                    dateTime : valueNotify.dateTime
                }
            }
            completedTodo(addTodoCompleted);
        } else if(type === 'completed') {
            const unCompleted= {
                id: id,
                title: title,
                status: 'waiting',
                des: '',
                priority : valuePriority,
                notes : '',
                deadLine : {
                    title : valueDeadLine.title,
                    date : valueDeadLine.date
                },
                repeat : {
                    state :valueRepeat.state,
                    title : valueRepeat.title
                },
                notify : {
                    title : valueNotify.title,
                    dateTime : valueNotify.dateTime
                }
            }
            unCompletedTodo(unCompleted);
        }
    }
    useEffect(()=> {
        //HANDLE SET CLASSNAME THEO TỪNG CATEGORY ITEM COLOR
        if(valuePriority === 'Danh mục đỏ'){
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-red');
        }else if(valuePriority === 'Danh mục cam') {
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-orange');
        }else if(valuePriority === 'Danh mục xanh') {
            setClassNamePriority('wrapper__todo-content-list__menuItem-priority-green');
        }

        // IF TYPE == 'COMPLETE' THEN SET CLASS NAME TITLE WITH (text-decoration: line-through)
        if(type === 'completed'){
            setClassNameTitleTodo('wrapper__todo-content-titleCompleted');
        } else {
            setClassNameTitleTodo('wrapper__todo-content-title');
        }
    },[valuePriority,type]);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx("wrapper__todo-check")} onClick={handleClickTodoCompleted}>
                {
                    type === 'completed' ? (
                        <div className={cx("wrapper__todo-circleCheckIcon")}>
                           <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                    ) : (
                        <div className={cx("wrapper__todo-circleIcon")}>
                            <i className={cx("wrapper__todo-circleIcon-check")}></i>
                        </div>
                    )
                }
            </div>
            <div className={cx('wrapper__todo-content')}  onClick={handleClickTodo}>
                <div className={cx(classNameTitleTodo)}>{title !== '' ? title : ''}</div>
                <ul className={cx('wrapper__todo-content-list')}>
                    <li className={cx('wrapper__todo-content-list__menuItem-task')}>Nhiệm vụ</li>
                    {
                        valueDeadLine ? (valueDeadLine.title ? 
                            (
                                <li className={cx('wrapper__todo-content-list__menuItem-deadline')}>
                                    <FontAwesomeIcon icon={faCalendar} className={cx('wrapper__todo-content-list__menuItem-deadline-menuItem-icon')}/>
                                    {valueDeadLine.title}
                                </li>
                            ):'') 
                        : ''
                    }
                    {
                        valueNotify ? (valueNotify.title ? 
                            (
                                <li className={cx('wrapper__todo-content-list__menuItem-notify')}>
                                    <FontAwesomeIcon icon={faBell} className={cx('wrapper__todo-content-list__menuItem-notify-menuItem-icon')}/>
                                    {valueNotify.title}
                                </li>
                            ) : '') 
                        : ''
                    }
                    {
                        valueRepeat.state === true ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-repeat')}>
                                <FontAwesomeIcon icon={faRepeat} className={cx('wrapper__todo-content-list__menuItem-repeat-menuItem-icon')}/>
                                {valueRepeat.title}
                            </li>
                        ) : ''
                    } 
                    {
                        valuePriority ? (
                            <li className={cx('wrapper__todo-content-list__menuItem-priority')}>
                                <span className={cx(classNamePriority)}>
                                    <FontAwesomeIcon className={cx(classNamePriority+'_icon')} icon={faCircle}></FontAwesomeIcon>
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