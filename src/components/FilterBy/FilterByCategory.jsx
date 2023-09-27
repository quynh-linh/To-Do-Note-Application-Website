import className from "classnames/bind";
import styles from './FilterBy.module.scss';
import Todo from "../Todo";
function FilterByCategory({listTask=[],objectTaskSelected=undefined,toCompletedTodo=undefined}) {
    const cx = className.bind(styles);
    const handleClickTodoItem = (e)=> {
        objectTaskSelected(e);
    };
    const handleTodoToCompletedTodo= (e) => {
        toCompletedTodo(e);
    };
    return ( 
        listTask.map((item,index) => {
            return (
                <div key={index}  className={cx('container__tasks-scroll-taskCompleted-list')}>
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
                </div>
            )
        })  
    );
}
export default FilterByCategory;