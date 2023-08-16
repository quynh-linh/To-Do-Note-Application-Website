import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from 'classnames/bind';
import styles from "./Menu.module.scss";
function MenuItem({data, onClick=undefined}) {
    const cx = className.bind(styles);
    const handleClickBox = () =>{
        onClick(data.title)
    }
    return (
        <div className={cx('menu-box')} onClick={handleClickBox}>
            <div>
                <FontAwesomeIcon className={cx('menu-box_icon')} icon={data.icon}></FontAwesomeIcon>
                <span className={cx('menu-box_name')}>{data.title}</span>
            </div>
            <div>
                T4
            </div>
        </div>
    );
}

export default MenuItem;