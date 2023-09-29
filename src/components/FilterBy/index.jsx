import className from "classnames/bind";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from './FilterBy.module.scss';
import FilterByCategory from "./FilterByCategory";
import Todo from "../Todo";
function FilterBy({isFilterByCategories=false, objectTaskSelected=undefined,objectUnCompleted=undefined , listTaskSelected=undefined , listTaskWaiting=undefined, toCompletedTodo=undefined}) {
    const cx = className.bind(styles);
    const [openCompletedTask, setOpenCompletedTask] = useState(false);
    const [openCategoryRed, setOpenCategoryRed] = useState(true);
    const [openCategoryGreen, setOpenCategoryGreen] = useState(true);
    const [openCategoryOrange, setOpenCategoryOrange] = useState(true);
    const [openWaitingTask, setOpenWaitingTask] = useState(true);
    
    const filterCategoryRed = listTaskWaiting.filter(item => item.priority === 'Danh mục đỏ');
    const filterCategoryGreen = listTaskWaiting.filter(item => item.priority === 'Danh mục xanh');
    const filterCategoryOrange = listTaskWaiting.filter(item => item.priority === 'Danh mục cam');
    const filterNoCategory = listTaskWaiting.filter(item => item.priority === '');

    const handleClickOpenCompletedTask = () => {
        setOpenCompletedTask(!openCompletedTask);
    };
    
    const handleCategoryRedTask = () => {
        setOpenCategoryRed(!openCategoryRed);
    };

    const handleCategoryOrangeTask = () => {
        setOpenCategoryOrange(!openCategoryOrange);
    };

    const handleCategoryGreenTask = () => {
        setOpenCategoryGreen(!openCategoryGreen);
    };


    const handleClickOpenWaitingTask = () => {
        setOpenWaitingTask(!openWaitingTask);
    };

    const handleClickTodoItem = (e) => {
        objectTaskSelected(e);
    };

    const handleUnCompletedTodo = (e) => {
        objectUnCompleted(e);
    };

    const handleTodoToCompletedTodo = (e) => {
        toCompletedTodo(e);
    }
    return ( 
        <div className={cx('container__tasks-scroll')}>
                {/* FILTER BY UNCLASSIFIED  */}
            {
                listTaskWaiting.length > 0 && (
                    <div className={cx('container__tasks-scroll-tasksListWaiting')}>
                        {
                            isFilterByCategories ? (
                                filterNoCategory.length > 0 ? (
                                    <div>
                                        <div className={cx('container__tasks-scroll-tasksListWaiting-header')}>
                                            <FontAwesomeIcon className={cx('container__tasks-scroll-tasksListWaiting-header-icon')} icon={openWaitingTask ? faChevronDown : faChevronRight} onClick={handleClickOpenWaitingTask}/>
                                            <div className={cx('container__tasks-scroll-tasksListWaiting-header-title')}>Chưa được phân loại</div>
                                            <div className={cx('container__tasks-scroll-tasksListWaiting-header-quantity')}>{filterNoCategory.length}</div>
                                        </div>
                                        {
                                            openWaitingTask ? (
                                                <div className={cx('container__tasks-scroll-tasksListWaiting-list')}>
                                                    {filterNoCategory.map((item, index) => {
                                                        return (
                                                            <Todo
                                                                id={item.id}
                                                                key={index}
                                                                title={item.title}
                                                                type={item.status}
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
                                            ) : ''
                                        }
                                    </div>
                                ) : ''
                            ) : (
                                <div className={cx('container__tasks-scroll-tasksListWaiting-list')}>
                                    {listTaskWaiting.map((item, index) => {
                                        return (
                                            <Todo
                                                id={item.id}
                                                key={index}
                                                title={item.title}
                                                type={item.status}
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
                            )
                        }
                    </div>
                )
            }
                {/* FILTER BY CATEGORY COLOR */}
            {
                isFilterByCategories && filterCategoryRed.length > 0 ? (
                    <div className={cx('container__tasks-scroll-taskCompleted')}>
                        <div className={cx('container__tasks-scroll-taskCompleted-header')}>
                            <FontAwesomeIcon className={cx('container__tasks-scroll-taskCompleted-header-icon')} icon={openCategoryRed ? faChevronDown : faChevronRight} onClick={handleCategoryRedTask}/>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-title')}>Danh mục đỏ</div>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-quantity')}>{filterCategoryRed.length}</div>
                        </div>
                        {
                            openCategoryRed && (
                                <FilterByCategory 
                                    listTask={filterCategoryRed}
                                    objectTaskSelected={(e) => handleClickTodoItem(e)}
                                    toCompletedTodo={(e) => handleTodoToCompletedTodo(e)}
                                />
                            )
                        }
                    </div>  
                ) : ''
            }
            {
                isFilterByCategories && filterCategoryGreen.length > 0 ? (
                    <div className={cx('container__tasks-scroll-taskCompleted')}>
                        <div className={cx('container__tasks-scroll-taskCompleted-header')}>
                            <FontAwesomeIcon className={cx('container__tasks-scroll-taskCompleted-header-icon')} icon={openCategoryGreen ? faChevronDown : faChevronRight} onClick={handleCategoryGreenTask}/>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-title')}>Danh mục xanh</div>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-quantity')}>{filterCategoryGreen.length}</div>
                        </div>
                        {
                            openCategoryGreen && (
                                <FilterByCategory 
                                    listTask={filterCategoryGreen}
                                    objectTaskSelected={(e) => handleClickTodoItem(e)}
                                    toCompletedTodo={(e) => handleTodoToCompletedTodo(e)}
                                />
                            )
                        }
                    </div>  
                ) : ''
            }
            {
                isFilterByCategories && filterCategoryOrange.length > 0 ? (
                    <div className={cx('container__tasks-scroll-taskCompleted')}>
                        <div className={cx('container__tasks-scroll-taskCompleted-header')}>
                            <FontAwesomeIcon className={cx('container__tasks-scroll-taskCompleted-header-icon')} icon={openCategoryOrange ? faChevronDown : faChevronRight} onClick={handleCategoryOrangeTask}/>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-title')}>Danh mục cam</div>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-quantity')}>{filterCategoryOrange.length}</div>
                        </div>
                        {
                            openCategoryOrange && (
                                <FilterByCategory 
                                    listTask={filterCategoryOrange}
                                    objectTaskSelected={(e) => handleClickTodoItem(e)}
                                    toCompletedTodo={(e) => handleTodoToCompletedTodo(e)}
                                />
                            )
                        }
                    </div>  
                ) : ''
            }
                {/* FILTER BY COMPLETED */}
            {
                listTaskSelected.length > 0 && (
                    <div className={cx('container__tasks-scroll-taskCompleted')}>
                        <div className={cx('container__tasks-scroll-taskCompleted-header')}>
                            <FontAwesomeIcon className={cx('container__tasks-scroll-taskCompleted-header-icon')} icon={openCompletedTask ? faChevronDown : faChevronRight} onClick={handleClickOpenCompletedTask}/>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-title')}>Đã hoàn thành</div>
                            <div className={cx('container__tasks-scroll-taskCompleted-header-quantity')}>{listTaskSelected.length}</div>
                        </div>
                        {
                            openCompletedTask ? (
                                <div  className={cx('container__tasks-scroll-taskCompleted-list')}>
                                    {listTaskSelected.map((item, index) => {
                                        return (
                                            <Todo
                                                id={item.id}
                                                key={index}
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
                            ) : ''
                        }
                    </div>  
                )
            }
            
        </div>
    );
}
export default FilterBy;