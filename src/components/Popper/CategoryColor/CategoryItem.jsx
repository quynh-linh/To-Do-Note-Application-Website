import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from 'classnames/bind';
import styles from "./Category.module.scss"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function CategoryItem({data, onClick=undefined}) {
    const cx = className.bind(styles);
    const [isColorChecked,setColorChecked] = useState(false);
    const handleClickBox = () =>{
        setColorChecked(!isColorChecked);
        onClick({
            title:data.title,
            state:!isColorChecked
        });
    }
    return (
        <div className={cx(isColorChecked ?  'wrapperCheck' : 'wrapper')} onClick={handleClickBox}>
            {
                data.title === 'Danh mục đỏ' && (
                    <div  className={cx('menu-box')}>
                        <div>
                            <FontAwesomeIcon className={cx('menu-box_iconRed')} icon={data.icon}></FontAwesomeIcon>
                            <span className={cx('menu-box_name')}>{data.title}</span>
                        </div>
                        {
                            isColorChecked && (
                                <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                            )
                        } 
                    </div>
                )
            }
            {
                data.title === 'Danh mục cam' && (
                    <div className={cx('menu-box')}>
                        <div>
                            <FontAwesomeIcon className={cx('menu-box_iconOrange')} icon={data.icon}></FontAwesomeIcon>
                            <span className={cx('menu-box_name')}>{data.title}</span>
                        </div>
                        {
                            isColorChecked && (
                                <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                            )
                        }
                    </div>
                )
            }
            {
                data.title === 'Danh mục xanh' && (
                    <div className={cx('menu-box')}>
                        <div>
                            <FontAwesomeIcon className={cx('menu-box_iconGreen')} icon={data.icon}></FontAwesomeIcon>
                            <span className={cx('menu-box_name')}>{data.title}</span>
                        </div>
                        {
                            isColorChecked && (
                                <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CategoryItem;