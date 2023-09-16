import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import className from 'classnames/bind';
import styles from './SidebarItem.module.scss';
import { sidebarRoutes } from '~/routes';
import { Toast } from '~/components/toast';

const SidebarItem = () => {
    const cx = className.bind(styles);
    const [itemSelected, setItemSelected] = useState(null);
    
    // HANDLE CLICK ITEM SELECTED
    const handleItemClick = (item) => {
        if(item.state === false) {
            // TYPE : (INFO,WARNING,ERROR,SUCCESS)
            // TITLE : NAME TOAST
            // POSITION : TOP-RIGHT , BOTTOM-RIGHT , ...
            // AUTOCLOSE : SET TIME CLOSE
            // LIMIT : NUMBER OF IMPRESSIONS
            Toast({type:'info',title: item.name,position:'top-right',autoClose:1000,limit:1});
        } else {
            setItemSelected(item.id);
        }
    };

    // IF THIS CLASSES SET SELECTED THEN ADD CLASSES (SELECTED)
    const itemClasses = classNames(styles['wrapper-list_li'], {
        [styles.selected]: itemSelected,
    });

    return (
        sidebarRoutes.map((item) => {
            return (           
                <li 
                    key={item.id} 
                    className={item.id === itemSelected ? cx(itemClasses) : cx('wrapper-list_li')} 
                    onClick={() => handleItemClick(item)}>
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
