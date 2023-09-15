import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import className from 'classnames/bind';
import styles from './SidebarItem.module.scss';
import { sidebarRoutes } from '~/routes';
import { toast } from 'react-toastify';

const cx = className.bind(styles);
const SidebarItem = () => {
    const [itemSelected, setItemSelected] = useState(null);
    const handleItemClick = (itemId) => {
        setItemSelected(itemId)
    };
    const itemClasses = classNames(styles['wrapper-list_li'], {
        [styles.selected]: itemSelected,
    });
    return (
        sidebarRoutes.map((item) => {
            return (           
                <li 
                    key={item.id} 
                    className={item.id === itemSelected ? cx(itemClasses) : cx('wrapper-list_li')} 
                    onClick={() => {
                        if(item.state === false) {
                            console.log(item.name);
                            
                            toast.info('Trang '+ item.name +' đang phát triển', {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                limit: 1
                            });
                        } else {
                            setItemSelected(item.id);
                        }
                    }}>
                    <Link  to={item.state ? item.path : ''} className={cx('wrapper-list_link')}>
                        <FontAwesomeIcon className={cx('wrapper-list_icon')} icon={item.icon}/>
                        <span>{item.name}</span>
                    </Link>
                </li>
            )
        })
    );
};

export default SidebarItem;
