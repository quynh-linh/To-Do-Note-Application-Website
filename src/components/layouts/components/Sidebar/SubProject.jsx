import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles);

function SubProject({item}){
    // Initialize the subnav variable to false
    const [subnav, setSubnav] = useState(false);
    // showSubnav function will change subnav value when clicked on
    const showSubnav = () => setSubnav(!subnav);
    return (
        <div>
            <Link  className={cx('project-li_link')} onClick={item.subNav && showSubnav}>
                <h4>{item.title}</h4>
                {<FontAwesomeIcon icon={item.iconOpened}/>}
            </Link>
            {
                subnav && item.subNav.map((subItem, index) => {
                    return (
                        <div key={index} className={cx('project-li_subProject')}>
                            <FontAwesomeIcon icon={subItem.icon} />
                            <h5>{subItem.title}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SubProject;