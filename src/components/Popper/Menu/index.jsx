import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind';
import styles from "./Menu.module.scss";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus, faCalendarPlus, faCalendarTimes, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Menu({children,state = false,items=[],title = '', handleCLick = undefined , checkValue = false , removeMenu = undefined}) {
    const cx = className.bind(styles);
    const [itemSelected,setItemSelected] = useState();
    const handleClickMenuItem = (item) =>{
        handleCLick(item);
        setItemSelected(item);
    }
    const handleClickRemoveValueMenu = () => {
        const updatedObject = {...itemSelected, title:'' , hours:'' , day:''};
        removeMenu(updatedObject);
    }
    const showMenuitem = () => {
        return items.map((item,index) => <MenuItem onClick={handleClickMenuItem} key={index} data={item}></MenuItem> )
    }

    const meuItemChoose = className(styles['menuItem-Choose'], {
        [styles.active]: checkValue,
    });
    const meuItemChooseName = className(styles['menuItem-Choose_name'], {
        [styles.active]: checkValue,
    });
    return (
        <Tippy
            content= {title}
            visible = {state === true}
            interactive
            placement='bottom'
            appendTo={document.body}
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <span className={cx('content-title')}>{title}</span>
                        {showMenuitem()}
                        { title === 'Đến hạn' ?
                            (
                                checkValue ? (
                                    <div>
                                        <div className={cx('menuItem-Choose')}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarPlus}/>
                                            <span className={cx('menuItem-Choose_name')}>Chọn ngày</span>
                                        </div>  
                                        <div onClick={handleClickRemoveValueMenu} className={cx(meuItemChoose)}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faTrash}/>
                                            <span className={cx(meuItemChooseName)}>Loại bỏ ngày đến hạn</span>
                                        </div> 
                                    </div>    
                                ) : 
                                (
                                    <div className={cx('menuItem-Choose')}>
                                        <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarPlus}/>
                                        <span className={cx('menuItem-Choose_name')}>Chọn ngày</span>
                                    </div>  
                                )
                            )
                            : ''
                        }
                        { title === 'Nhắc nhở'?
                            (
                                checkValue ? (
                                    <div>
                                        <div className={cx('menuItem-Choose')}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarTimes}/>
                                            <span className={cx('menuItem-Choose_name')}>Chọn ngày & Giờ</span>
                                        </div>
                                        <div onClick={handleClickRemoveValueMenu} className={cx(meuItemChoose)}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faTrash}/>
                                            <span className={cx(meuItemChooseName)}>Loại bỏ lời nhắc nhở</span>
                                        </div> 
                                    </div>
                                ) :
                                (
                                    <div className={cx('menuItem-Choose')}>
                                        <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarTimes}/>
                                        <span className={cx('menuItem-Choose_name')}>Chọn ngày & Giờ</span>
                                    </div>
                                ))
                            : ''
                        }
                        { title === 'Lặp lại' ?
                            (
                                checkValue ? (
                                    <div>
                                        <div className={cx('menuItem-Choose')}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarMinus}/>
                                            <span className={cx('menuItem-Choose_name')}>Tùy chỉnh</span>
                                        </div>
                                        <div onClick={handleClickRemoveValueMenu} className={cx(meuItemChoose)}>
                                            <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faTrash}/>
                                            <span className={cx(meuItemChooseName)}>Loại bỏ lời nhắc nhở</span>
                                        </div>
                                    </div>
                                ):
                                (
                                    <div className={cx('menuItem-Choose')}>
                                        <FontAwesomeIcon className={cx('menuItem-Choose_icon')}  icon={faCalendarMinus}/>
                                        <span className={cx('menuItem-Choose_name')}>Tùy chỉnh</span>
                                    </div>
                                )
                            )
                            :''
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;