import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import className from 'classnames/bind';
import styles from './SidebarItem.module.scss';
const cx = className.bind(styles);
const SidebarItem = ({ title , keyboard}) => {
    const [itemSelected, setItemSelected] = useState(null);
    const name = 'wrapper-list_li';
    const handleClick = () => {
        setItemSelected(keyboard);
        console.log(setItemSelected);
    };
    console.log(keyboard);
    const itemClasses = classNames(styles['wrapper-list_li'], {
        [styles.selected]: itemSelected === keyboard,
    });
    return (
        <li key={keyboard} className={cx(itemSelected === keyboard ? itemClasses : name)} onClick={handleClick}>
            <Link to={title.path} className={cx('wrapper-list_link')}>
                {<FontAwesomeIcon icon={title.icon}/>}
                    <h4>{title.name}</h4>
            </Link>
        </li>
    );
};

export default SidebarItem;
