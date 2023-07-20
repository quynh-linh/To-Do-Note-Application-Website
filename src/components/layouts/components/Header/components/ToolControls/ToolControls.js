import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faNewspaper, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import styles from './ToolControls.module.scss'
import { useState } from 'react';
function ToolControls({handleClick , isControls , isBool}) {
    const data = [
        {
            id : 1 ,
            name : 'Thiết lập',
            icon : faGear
        },
        {
            id : 2 ,
            name : 'Trợ giúp',
            icon : faQuestion
        },
        {
            id : 3 ,
            name : 'Có gì mới',
            icon : faNewspaper
        }
    ]
    const [itemSelected,setItemSelected] = useState(0);
    const cx = className.bind(styles)
    const itemClassesControls = className(styles['controls-menu_btn'], {
        [styles.selected]: true,
    });
    const handleClickItem = (item) =>{
        setItemSelected(item)
        handleClick(item)
        isControls(true)
    }
    
    return (
        data.map((item,index) => {
            return (
                <Tippy key={index} content={item.name}>
                    <li 
                        className={item.id === itemSelected && isBool  ? cx(itemClassesControls) : cx('controls-menu_btn')} 
                        onClick={() => handleClickItem(item.id)}>
                        <FontAwesomeIcon className={cx('icon-faPlus')} icon={item.icon}/>
                    </li>
                </Tippy>
            )
        })
    )
}
export default ToolControls;