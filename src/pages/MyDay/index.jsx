import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import {
    faBell,
    faCalendarDays,
    faCircle,
    faLightbulb,
    faNoteSticky,
    faStar,
    faSun,
} from '@fortawesome/free-regular-svg-icons';
import { useState , useEffect} from 'react';
import {
    faArrowUpWideShort,
    faCalendarDay,
    faChevronDown,
    faChevronRight,
    faClose,
    faEllipsisH,
    faObjectGroup,
    faPlus,
    faRepeat,
    faShare,
    faUmbrellaBeach,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    MENU_ITEMS_DEADLINE,
    MENU_ITEMS_REMIND,
    MENU_ITEMS_REPEAT,
    MENU_ITEMS_SORT,
    MENU_ITEMS_GROUP,
    MENU_ITEMS_CATEGORY,
    REAL_TIME
} from '~/const';
import Todo from '~/components/Todo';
import Drawer from '~/components/Drawer/Drawer';
import Menu from '~/components/Popper/Menu';
import Toolbar from '~/components/Popper/Toolbar';
import CategoryColor from '~/components/Popper/CategoryColor';
import styles from './MyDay.module.scss';
import 'tippy.js/dist/tippy.css';

import { addTodo , completeTodo, unCompletedTodo , updateTodo } from '~/redux/taskSlice';
function MyDay() {
    const cx = className.bind(styles);
    // LOADING PAGE
    const [loading, setLoading] = useState(true);
    // USER FOCUS INPUT (THEN OPENING MENU CONTROLS)
    const [isInputFocused, setInputFocused] = useState(false);
    // CHECK STATE MENU CONTROLS
    const [isBtnDeadline, setBtnDeadline] = useState(false);
    const [isBtnRemind, setBtnRemind] = useState(false);
    const [isBtnRepeat, setBtnRepeat] = useState(false);
    // CHECK STATE DRAWER CONTROLS
    // THE TODO STATUS IS BEING SELECTED
    const [isDeadlineSelected, setDeadlineSelected] = useState(false);
    const [isRemindSelected, setRemindSelected] = useState(false);
    const [isRepeatSelected, setRepeatSelected] = useState(false);
    const [isPickCategory , setPickCategory] = useState(false);
    // CATEGORY COLOR IN TODO STATUS IS BEING SELECTED
    const [categoryColor, setCategoryColor] = useState({});
    const [classNameCategoryItem,setClassNameCategoryItem] = useState('');
    const [stateCheckCategoryColor,setStateCheckCategoryColor] = useState({
        title: '',
        state: true
    });
    // CHECK STATE FILTER TOOLBAR
    const [isSortByCreation, setSortByCreation] = useState(false);
    const [isGroupByCategories, setGroupByCategories] = useState(false);
    // TODO LIST
    const [isClickHandleTodo, setClickHandleTodo] = useState(false);
    // VALUE INPUT ADD TODO
    const [inputValue, setInputValue] = useState('');
    // VALUE MENU CONTROLS
    const [valueMenuDeadline, setValueMenuDeadline] = useState({});
    const [valueMenuRemind, setValueMenuRemind] = useState({});
    const [valueMenuRepeat, setValueMenuRepeat] = useState({});
    // VALUE MENU CONTROLS
    const [updateValueMenuDeadline, setUpdateValueDrawerDeadline] = useState({});
    const [updateValueMenuRemind, setUpdateValueDrawerRemind] = useState({});
    const [updateValueMenuRepeat, setUpdateValueDrawerRepeat] = useState({});
    // VALUE FILTER TOOLBAR
    const [valueByCreation, setValueSortByCreation] = useState('');
    const [valueGroupByCategories, setValueGroupByCategories] = useState('');
    // VALUE (OBJECT) TODO SELECTED
    const [selectedTodo, setSelectedTodo] = useState({});
    const [selectedTodoTitle,setSelectedTodoTitle] = useState('');

    // SHOW/HIDE WITH LIST_TODO_COMPLETED
    const [openCompletedTask,setOpenCompletedTask] = useState(false);

    // REDUX TOOLKIT
    const dispatch = useDispatch();
    const LIST_TODO = useSelector((state) => state.task.list_todo);
    const LIST_TODO_COMPLETED = useSelector((state) => state.task.list_todo_completed);
    // HANDLE ADD TODO TO LIST_TODO
    const handleClickAddTaskToListTodo = () => {
        // NEED DATA : inputValue , valueMenuDeadline , valueMenuRemind , valueMenuRepeat
        const idTask = LIST_TODO.length;
        if(inputValue !== ''){
            const addNewTodo = {
                id: idTask,
                title: inputValue,
                des: '',
                priority : '',
                notes : '',
                deadline : {
                    title : valueMenuDeadline.title ? valueMenuDeadline.title : '',
                    date : valueMenuDeadline.value ? valueMenuDeadline.value : ''
                },
                repeat : {
                    state : valueMenuRepeat.title ? true : false ,
                    title : valueMenuRepeat.title ? valueMenuRepeat.title : ''
                },
                notify : {
                    title : valueMenuRemind.title ? valueMenuRemind.title : '',
                    dateTime : valueMenuRemind.value ? valueMenuRemind.value : ''
                }
            }
            // SEND ACTION (ADD TODO)
            dispatch(addTodo(addNewTodo));
        }
        // SET TO ORIGINAL VALUES
        setValueMenuDeadline({});
        setValueMenuRemind({});
        setValueMenuRepeat({});
        setInputValue('');
    }

    // HANDLE MOVE TODO IN LIST_TODO INTO LIST_TODO_COMPLETED
    const handleTodoToCompletedTodo = (objectTodo) => {
        if('status' in objectTodo && objectTodo.status === 'completed'){
            dispatch(completeTodo(objectTodo));
        }
    }

    // HANDLE MOVE TODO IN LIST_TODO_COMPLETED INTO LIST_TODO
    const handleUnCompletedTodo = (objectTodo) => {
        if('status' in objectTodo && objectTodo.status === 'waiting'){
            dispatch(unCompletedTodo(objectTodo));
        }
    }

    // HANDLE USER FOCUS INPUT OPENING ADD TASK
    const handleInputFocus = () => {
        setInputFocused(true);
    };

    // HANDLE DEADLINE TO MENU CONTROLS
    const handleClickButtonDeadline = () => {
        setBtnDeadline(!isBtnDeadline);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };

    // HANDLE REMIND TO MENU CONTROLS
    const handleClickButtonRemind = () => {
        setBtnRemind(!isBtnRemind);
        setBtnDeadline(false);
        setBtnRepeat(false);
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };
    // HANDLE REPEAT TO MENU CONTROLS
    const handleClickButtonRepeat = () => {
        setBtnRepeat(!isBtnRepeat);
        setBtnRemind(false);
        setBtnDeadline(false);
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };

    // HANDLE (DEADLINE) TODO SELECTED TO DRAWER
    const handleClickDeadLineTodoSelected = () => {
        setDeadlineSelected(!isDeadlineSelected);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };

    // HANDLE (REMIND) TODO SELECTED TO DRAWER
    const handleClickRemindTodoSelected = () => {
        setRemindSelected(!isRemindSelected);
        setDeadlineSelected(false);
        setRepeatSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };
    // HANDLE (REPEAT) TODO SELECTED TO DRAWER
    const handleClickRepeatTodoSelected = () => {
        setRepeatSelected(!isRepeatSelected);
        setRemindSelected(false);
        setDeadlineSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };
    // HANDLE (REPEAT) TODO SELECTED TO DRAWER
    const handleClickPickCategory = () => {
        setPickCategory(!isPickCategory);
        setRepeatSelected(false);
        setRemindSelected(false);
        setDeadlineSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };
    // HANDLE CLICK SORT CREATION
    const handleClickSortCreation = () => {
        setSortByCreation(!isSortByCreation);
        setGroupByCategories(false);
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
    };

    // HANDLE CLICK GROUP BY CATEGORIES
    const handleClickGroupCategories = () => {
        setGroupByCategories(!isGroupByCategories);
        setSortByCreation(false);
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
    };

    // HANDLE REMOVE SORT CREATION ITEM
    const handleRemoveSortFilter = () => {
        setValueSortByCreation('');
    };

    // HANDLE REMOVE GROUP BY CATEGORIES ITEM
    const handleRemoveGroupBy = () => {
        setValueGroupByCategories('');
    };

    // HANDLE SET VALUE INPUT (ADD TASK)
    const handleInputChange = (event) => {
        setInputFocused(true);
        setInputValue(event.target.value);
    };

    // HANDLE CLICK TODO ITEM
    const handleClickTodoItem = (e) => {
        setSelectedTodo(e);
        setClickHandleTodo(e.state);
        // SET TO INITIAL STATUS DEADLINE,REMIND,REPEAT 
        setUpdateValueDrawerDeadline({});
        setUpdateValueDrawerRemind({});
        setUpdateValueDrawerRepeat({});
        // SET TODO SELECTED DRAWER = FALSE
        setDeadlineSelected(false);
        setRemindSelected(false);
        setRepeatSelected(false);
        // SET MENU CONTROLS = FALSE
        setBtnDeadline(false);
        setBtnRemind(false);
        setBtnRepeat(false);
        // SET FILTER TOOLBAR = FALSE
        setSortByCreation(false);
        setGroupByCategories(false);
    };

    // HANDLE CLOSE MENU TODO ITEM
    const handleCloseHideTodo = () => {
        setClickHandleTodo(false);
    };

    // HANDLE CHANGE TITLE TODO
    const handleChangeTitleTodo = (e) => {
        setSelectedTodoTitle(e.target.value);
    };

    // HANDLE REMOVE CATEGORY COLOR
    const handleRemoveCategoryColor = () => {
        console.log(categoryColor);
        if (categoryColor.state) {
            const updatedObject = { ...categoryColor, state: false};
            setCategoryColor(updatedObject);
            setStateCheckCategoryColor(updatedObject);
        } 
    };

    // HANDLE CLICK OPEN COMPLETED TASK
    const handleClickOpenCompletedTask = () =>{
        setOpenCompletedTask(!openCompletedTask);
    };
    
    useEffect(() => {
        // CHECK PRIORITY, GET TITLE AND SET CATEGORY COLOR AND CHECK SELECTED
        if(selectedTodo.priority === 'Danh mục đỏ'){
            const updatedObjectRed = { ...categoryColor, state: true , title:'Danh mục đỏ'};
            setCategoryColor(updatedObjectRed);
            setStateCheckCategoryColor(updatedObjectRed);
            setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemRed');
        } else if(selectedTodo.priority === 'Danh mục xanh'){
            const updatedObjectGreen = { ...categoryColor, state: true , title:'Danh mục xanh'};
            setCategoryColor(updatedObjectGreen);
            setStateCheckCategoryColor(updatedObjectGreen);
            setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemGreen');
        } else if(selectedTodo.priority === 'Danh mục cam'){
            const updatedObjectOrange = { ...categoryColor, state: true , title:'Danh mục cam'};
            setCategoryColor(updatedObjectOrange);
            setStateCheckCategoryColor(updatedObjectOrange);
            setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemOrange');
        } else {
            const updatedObject = { ...categoryColor, state: false};
            setCategoryColor(updatedObject);
            setStateCheckCategoryColor(updatedObject);  
        } 

        //
        if(selectedTodo.title !== undefined){
            setSelectedTodoTitle(selectedTodo.title);
        }
        //
        console.log(selectedTodo);
        console.log(selectedTodo.dateTime);
        console.log(updateValueMenuRemind);

        // SET LOADING PAGE 18S
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [selectedTodo.priority,selectedTodo.title]);
    return (
       <div>
            {
                loading ? (
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper__loading')}>
                            <p>Đang tải trang</p>
                            <CircularProgress  />
                        </div>
                    </div>
                ) : (
                    <div className={cx('wrapper')}>
                        <div className={cx(isClickHandleTodo ? 'wrapper-todo-check' : 'wrapper-todo')}>
                            <div className={cx('header')}>
                                <div className={cx('header__wrapper')}>
                                    <span className={cx('header__wrapper-left')}>
                                        <ul className={cx('header__wrapper-left_list')}>
                                            <li className={cx('header__wrapper-left_list-li')}>
                                                <FontAwesomeIcon
                                                    className={cx('header__wrapper-left_list-li-icon')}
                                                    icon={faUmbrellaBeach}
                                                ></FontAwesomeIcon>
                                            </li>
                                            <li className={cx('header__wrapper-left_list-li')}>
                                                <h4 className={cx('header__wrapper-left_list-li-title')}>Ngày của tôi</h4>
                                            </li>
                                            <li className={cx('header__wrapper-left_list-li')}>
                                                <FontAwesomeIcon
                                                    className={cx('header__wrapper-left_list-li-icon')}
                                                    icon={faEllipsisH}
                                                ></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                    </span>
                                    <span className={cx('header__wrapper-right')}>
                                        <ul className={cx('header__wrapper-right_control')}>
                                            <Toolbar
                                                title={'Sắp xếp'}
                                                items={MENU_ITEMS_SORT}
                                                state={isSortByCreation}
                                                handleCLick={(item) => {
                                                    setValueSortByCreation(item);
                                                    setSortByCreation(false);
                                                }}
                                            >
                                                <li onClick={handleClickSortCreation}>
                                                    <FontAwesomeIcon icon={faArrowUpWideShort}></FontAwesomeIcon>
                                                    <span>Sắp xếp</span>
                                                </li>
                                            </Toolbar>
                                            <Toolbar
                                                title={'Nhóm'}
                                                items={MENU_ITEMS_GROUP}
                                                state={isGroupByCategories}
                                                handleCLick={(item) => {
                                                    setValueGroupByCategories(item);
                                                    setGroupByCategories(false);
                                                }}
                                            >
                                                <li onClick={handleClickGroupCategories}>
                                                    <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                                    <span>Nhóm</span>
                                                </li>
                                            </Toolbar>
                                            <Toolbar title={'Đề xuất'}>
                                                <li>
                                                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                                                    <span>Đề xuất</span>
                                                </li>
                                            </Toolbar>
                                        </ul>
                                    </span>
                                </div>
                                <div className={cx('header__box')}>
                                    <p className={cx('header__box-realTime')}>{REAL_TIME}</p>
                                    <div className={cx('header__box-sortFilter')}>
                                        {valueByCreation.length > 0 && (
                                            <div className={cx('header__box-sortFilter-descriptions')}>
                                                <p>Sắp xếp theo {valueByCreation}</p>
                                                <button
                                                    onClick={handleRemoveSortFilter}
                                                    className={cx('header__box-sortFilter-descriptions-removeSortFilter')}
                                                    type="button"
                                                >
                                                    <FontAwesomeIcon
                                                        className={cx('header__box-sortFilter-descriptions-removeSortFilter-iconClose')}
                                                        icon={faXmark}
                                                    />
                                                </button>
                                            </div>
                                        )}
                                        {valueGroupByCategories.length > 0 && (
                                            <div className={cx('header__box-sortFilter-descriptions')}>
                                                <p>Nhóm theo danh mục</p>
                                                <button
                                                    onClick={handleRemoveGroupBy}
                                                    className={cx('header__box-sortFilter-descriptions-removeSortFilter')}
                                                    type="button"
                                                >
                                                    <FontAwesomeIcon
                                                        className={cx('header__box-sortFilter-descriptions-removeSortFilter-iconClose')}
                                                        icon={faXmark}
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                            </div>
                            <div className={cx('container')}>
                                <div className={cx('container__taskCreation')}>
                                    <div className={cx('container__taskCreation-addTask')}>
                                        <button
                                            onClick={handleInputFocus}
                                            id="taskCreation_addTaskBtn"
                                            className={cx('container__taskCreation-addTask-addTaskBtn')}
                                            type="button"
                                            aria-label="Thêm tác vụ"
                                            tabIndex="0"
                                        >
                                            <FontAwesomeIcon icon={isInputFocused ? faCircle : faPlus}></FontAwesomeIcon>
                                        </button>
                                        <input
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onClick={handleInputFocus}
                                            className={cx('container__taskCreation-addTask-addTaskInput')}
                                            type="text"
                                            maxLength="255"
                                            placeholder="Thêm tác vụ"
                                        ></input>
                                    </div>
                                    {isInputFocused && (
                                        <div id="taskCreation_MenuControl" className={cx('container__taskCreation-menuControl')}>
                                            <div className={cx('container__taskCreation-menuControl_menuList')}>
                                                <Menu
                                                    title={'Đến hạn'}
                                                    state={isBtnDeadline}
                                                    items={MENU_ITEMS_DEADLINE}
                                                    checkValue={valueMenuDeadline.title ? true : false}
                                                    handleCLick={(item) => {
                                                        setValueMenuDeadline(item);
                                                        setBtnDeadline(false);
                                                    }}
                                                    removeMenu={(item) =>{
                                                        setValueMenuDeadline(item);
                                                        setBtnDeadline(false);
                                                    }}
                                                >
                                                    <button
                                                        onClick={handleClickButtonDeadline}
                                                        className={cx(
                                                            'title' in valueMenuDeadline && valueMenuDeadline.title !== '' 
                                                                ? 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreationCheck'
                                                                : 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreation',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon icon={faCalendarDays} />
                                                        {'title' in valueMenuDeadline ? ' ' + valueMenuDeadline.title : ''}
                                                    </button>
                                                </Menu>
                                                <Menu
                                                    title={'Nhắc nhở'}
                                                    state={isBtnRemind}
                                                    items={MENU_ITEMS_REMIND}
                                                    checkValue={valueMenuRemind.title ? true : false}
                                                    handleCLick={(item) => {
                                                        setValueMenuRemind(item);
                                                        setBtnRemind(false);
                                                    }}
                                                    removeMenu={(item) =>{
                                                        setValueMenuRemind(item);
                                                        setBtnRemind(false);
                                                    }}
                                                >
                                                    <button
                                                        onClick={handleClickButtonRemind}
                                                        className={cx(
                                                            'title' in valueMenuRemind && valueMenuRemind.title !== '' 
                                                                ? 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreationCheck'
                                                                : 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreation',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                                        {'title' in valueMenuRemind ? ' ' + valueMenuRemind.title : ''}
                                                    </button>
                                                </Menu>
                                                <Menu
                                                    title={'Lặp lại'}
                                                    state={isBtnRepeat}
                                                    items={MENU_ITEMS_REPEAT}
                                                    checkValue={valueMenuRepeat.title ? true : false}
                                                    handleCLick={(item) => {
                                                        setValueMenuRepeat(item);
                                                        setBtnRepeat(false);
                                                    }}
                                                    removeMenu={(item) =>{
                                                        setValueMenuRepeat(item);
                                                        setBtnRepeat(false);
                                                    }}
                                                >
                                                    <button
                                                        onClick={handleClickButtonRepeat}
                                                        className={cx(
                                                            'title' in valueMenuRepeat && valueMenuRepeat.title !== '' 
                                                                ? 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreationCheck'
                                                                : 'container__taskCreation-menuControl_menuList-btnMenuItemTaskCreation',
                                                        )}
                                                    >
                                                        <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
                                                        {'title' in valueMenuRepeat ? ' ' + valueMenuRepeat.title : ''}
                                                    </button>
                                                </Menu>
                                            </div>
                                            <div className={cx('container__taskCreation-menuControl-btnAddTask')}>
                                                <button
                                                    type="button"
                                                    aria-label="Thêm"
                                                    disabled={inputValue.length === 0 ? true : false}
                                                    onClick={handleClickAddTaskToListTodo}
                                                >
                                                    Thêm
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className={cx('container__tasks-scroll')}>
                                    <div className={cx('container__tasks-scroll-tasksList')}>
                                        {LIST_TODO.map((item, index) => {
                                            return (
                                                <Todo
                                                    id={item.id}
                                                    key={index}
                                                    title={item.title}
                                                    description={item.description}
                                                    valueDeadLine={item.deadline}
                                                    valueNotify={item.notify}
                                                    valueRepeat={item.repeat}
                                                    valuePriority={item.priority}
                                                    onClick={(e) => handleClickTodoItem(e)}
                                                    completedTodo = {(e) => handleTodoToCompletedTodo(e)}
                                                />
                                            );
                                        })}   
                                    </div>
                                    <div className={cx('container__tasks-scroll-taskCompleted')}>
                                        <div className={cx('container__tasks-scroll-taskCompleted-header')}>
                                            <FontAwesomeIcon className={cx('container__tasks-scroll-taskCompleted-header-icon')} icon={openCompletedTask ?faChevronDown : faChevronRight} onClick={handleClickOpenCompletedTask}/>
                                            <div className={cx('container__tasks-scroll-taskCompleted-header-title')}>Đã hoàn thành</div>
                                            <div className={cx('container__tasks-scroll-taskCompleted-header-quantity')}>{LIST_TODO_COMPLETED.length}</div>
                                        </div>
                                        {
                                            openCompletedTask && (
                                                <div  className={cx('container__tasks-scroll-taskCompleted-list')}>
                                                    {LIST_TODO_COMPLETED.map((item, index) => {
                                                        return (
                                                            <Todo
                                                                key={index}
                                                                id={item.id}
                                                                type={item.status}
                                                                title={item.title}
                                                                description={item.description}
                                                                valueDeadLine={item.deadline}
                                                                valueNotify={item.notify}
                                                                valueRepeat={item.repeat}
                                                                valuePriority={item.priority}
                                                                onClick={(e) => handleClickTodoItem(e)}
                                                                unCompletedTodo={(e) => handleUnCompletedTodo(e)}
                                                            />
                                                        );
                                                    })} 
                                                </div>
                                            )
                                        }
                                    </div>             
                                </div>
                            </div>
                        </div>
                        {isClickHandleTodo && (
                            <Drawer type="todo">
                                <div className={cx('drawer-todo')}>
                                    <div className={cx('drawer-todo__content')}>
                                        <div className={cx('drawer-todo__content__title')}>
                                            <input className={cx('drawer-todo__content__title-checkbox')} type="checkbox"></input>
                                            {
                                                selectedTodo.title && (
                                                    <input
                                                        className={cx('drawer-todo__content__title-text')}
                                                        type="text"
                                                        value={selectedTodoTitle}
                                                        onChange={handleChangeTitleTodo}
                                                    />
                                                )
                                            }
                                            <FontAwesomeIcon className={cx('drawer-todo__content__title-icon')} icon={faStar} />
                                        </div>
                                        <div className={cx('drawer-todo__content__addMyDay')}>
                                            <FontAwesomeIcon className={cx('drawer-todo__content__addMyDay-icon')} icon={faSun} />
                                            <span className={cx('drawer-todo__content__addMyDay-title')}>
                                                Thêm vào ngày của tôi
                                            </span>
                                            <FontAwesomeIcon
                                                className={cx('drawer-todo__content__addMyDay-iconRemove')}
                                                icon={faClose}
                                            />
                                        </div>
                                        <div className={cx('drawer-todo__content__menuTask')}>
                                            <Menu
                                                title={'Nhắc nhở'}
                                                state={isRemindSelected}
                                                items={MENU_ITEMS_REMIND}
                                                checkValue={updateValueMenuRemind.title ? true : false}
                                                handleCLick={(item) => {
                                                    setUpdateValueDrawerRemind(item);
                                                    setRemindSelected(false);
                                                }}
                                                removeMenu = {(item) => {
                                                    setUpdateValueDrawerRemind(item);
                                                    setRemindSelected(false);
                                                }}
                                            >
                                                <div className={cx('drawer-todo__content__menuTask-notify')} onClick={handleClickRemindTodoSelected}>
                                                    <FontAwesomeIcon
                                                        className={cx('drawer-todo__content__menuTask-notify-iconSelected')}
                                                        icon={faNoteSticky}
                                                    />
                                                    {
                                                        selectedTodo.remind && (
                                                            <div className={cx('drawer-todo__content__menuTask-notify-remind')}>
                                                                <div className={cx('drawer-todo__content__menuTask-notify-remind-at')}>
                                                                    Nhắc nhở tôi
                                                                    {selectedTodo.remind.dateTime 
                                                                        ? (updateValueMenuRemind.hours ? ' '+ updateValueMenuRemind.hours + ' '+ updateValueMenuRemind.day  : ' '+selectedTodo.remind.dateTime)   
                                                                        : (updateValueMenuRemind.hours ? ' '+updateValueMenuRemind.hours + ' '+ updateValueMenuRemind.day : ' ')  
                                                                    }   
                                                                </div>
                                                                <div className={cx('drawer-todo__content__menuTask-notify-remind-title')}>
                                                                    {selectedTodo.remind.title 
                                                                        ? (updateValueMenuRemind.title ? updateValueMenuRemind.title :selectedTodo.remind.title) 
                                                                        : (updateValueMenuRemind.title ? updateValueMenuRemind.title : '')}
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </Menu>
                                            <Menu
                                                title={'Đến hạn'}
                                                state={isDeadlineSelected}
                                                items={MENU_ITEMS_DEADLINE}
                                                checkValue={updateValueMenuDeadline.title  ? true : false}
                                                handleCLick={(item) => {
                                                    console.log(item);
                                                    setUpdateValueDrawerDeadline(item);
                                                    setDeadlineSelected(false);
                                                }}
                                                removeMenu = {(item) => {
                                                    setUpdateValueDrawerDeadline(item);
                                                    setDeadlineSelected(false);
                                                }}
                                            >
                                                {
                                                    selectedTodo.deadLine && (
                                                        <div className={cx('drawer-todo__content__menuTask-dueDate')} onClick={handleClickDeadLineTodoSelected}>
                                                            <FontAwesomeIcon className={cx('drawer-todo__content__menuTask-dueDate-iconSelected')} icon={faCalendarDay}/>
                                                            <span className={cx('drawer-todo__content__menuTask-dueDate-titleSelected')} >
                                                                {
                                                                    selectedTodo.deadLine.title 
                                                                    ? 'Đến hạn '+ (updateValueMenuDeadline.title ? updateValueMenuDeadline.title :selectedTodo.deadLine.title)   
                                                                    : (updateValueMenuDeadline.title ? 'Đến hạn '+ updateValueMenuDeadline.title : 'Thêm ngày đến hạn')
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            </Menu>
                                            <Menu
                                                title={'Lặp lại'}
                                                state={isRepeatSelected}
                                                items={MENU_ITEMS_REPEAT}
                                                checkValue={updateValueMenuRepeat.title  ? true : false}
                                                handleCLick={(item) => {
                                                    console.log(item);
                                                    setUpdateValueDrawerRepeat(item);
                                                    setRepeatSelected(false);
                                                }}
                                                removeMenu = {(item) => {
                                                    setUpdateValueDrawerRepeat(item);
                                                    setRepeatSelected(false);
                                                }}
                                            >
                                                {
                                                    selectedTodo.repeat && (
                                                        <div className={cx('drawer-todo__content__menuTask-repeat')} onClick={handleClickRepeatTodoSelected}>
                                                            <FontAwesomeIcon
                                                                className={cx('drawer-todo__content__menuTask-repeat-iconSelected')}
                                                                icon={faRepeat}
                                                            />
                                                            <div className={cx('drawer-todo__content__menuTask-repeat-check-title')}>
                                                                <div>Lặp lại</div>
                                                                <div>
                                                                    {
                                                                        selectedTodo.repeat.state
                                                                        ? 'vào ' + (updateValueMenuRepeat.title ? updateValueMenuRepeat.title : selectedTodo.repeat.title)
                                                                        : (updateValueMenuRepeat.title ? 'vào ' +updateValueMenuRepeat.title : '')
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </Menu>
                                        </div>
                                        <div>
                                            <CategoryColor
                                                title={''}
                                                state={isPickCategory}
                                                items={MENU_ITEMS_CATEGORY}
                                                stateCheck={stateCheckCategoryColor}
                                                handleCLick={(e) => {
                                                    setCategoryColor(e);
                                                    if(e.title === 'Danh mục đỏ'){
                                                        setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemRed');
                                                    } else if(e.title === 'Danh mục cam'){
                                                        setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemOrange');
                                                    } else if(e.title === 'Danh mục xanh'){
                                                        setClassNameCategoryItem('drawer-todo__content__addCategory-list-CategoryList-itemGreen');
                                                    }
                                                }}
                                            >
                                                <div className={cx('drawer-todo__content__addCategory')}  onClick={handleClickPickCategory}>
                                                    <FontAwesomeIcon
                                                        className={cx('drawer-todo__content__addCategory-icon')}
                                                        icon={faNoteSticky}
                                                    />
                                                    <div className={cx('drawer-todo__content__addCategory-list')}>
                                                        {
                                                            selectedTodo.priority ? (
                                                                <div className={cx('drawer-todo__content__addCategory-list-CategoryList')}>
                                                                    {           
                                                                        categoryColor.state === true ?( 
                                                                            <div className={cx(classNameCategoryItem)}>
                                                                                <div className={cx(classNameCategoryItem+'-title')}>{categoryColor.title}</div>
                                                                                <div onClick={handleRemoveCategoryColor}>
                                                                                    <FontAwesomeIcon className={cx(classNameCategoryItem+'-icon')} icon={faClose}/>
                                                                                </div>
                                                                            </div>
                                                                        ) : ''
                                                                    }     
                                                                </div>
                                                            ) : ''
                                                        }                                                  
                                                        <span className={cx('drawer-todo__content__addCategory-list-text')}>Pick a category</span>
                                                    </div>
                                                </div>
                                            </CategoryColor>
                                        </div>
                                        <div className={cx('drawer-todo__content__textarea')}>
                                            <textarea
                                                className={cx('drawer-todo__content__textarea-text')}
                                                placeholder="Add notes"
                                                rows="5"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className={cx('drawer-todo__footer')}>
                                        <div className={cx('drawer-todo__footer__content')}>
                                            <Tippy content="Ẩn chi tiết todo">
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faShare}
                                                        onClick={handleCloseHideTodo}
                                                        className={cx('drawer-todo__footer__content-icon')}
                                                    />
                                                </span>
                                            </Tippy>
                                            <div className={cx('drawer-todo__footer__content-init')}>
                                                Được tạo vào Thứ 2 , 11/09
                                            </div>
                                            <Tippy content="Xóa nhiệm vụ">
                                                <span>
                                                    <FontAwesomeIcon icon={faClose} />
                                                </span>
                                            </Tippy>
                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        )}
                </div>
                )
            }
       </div>
    );
}
export default MyDay;
