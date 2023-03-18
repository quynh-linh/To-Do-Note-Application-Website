import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
 
import styles from './Sidebar.module.scss'
import { publicRoutes } from "~/routes";
import BasicTabs from './TabPanel';

const cx = className.bind(styles);

function Sidebar(){

    return(
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-list')}>
                <ul className={cx('wrapper-list_ul')}>
                    {
                        publicRoutes.map((item, index) => {
                            return (
        
                                <li key={index} className={cx('wrapper-list_li')}>
                                    <Link to={item.path} className={cx('wrapper-list_link')}>
                                        {<FontAwesomeIcon icon={item.icon}/>}
                                        <h4>{item.name}</h4>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={cx('wrapper-favorites')}>
                <h2>Favorites</h2>
                <FontAwesomeIcon className={cx('icon-faCaretRight')} icon={faCaretRight}/>
            </div>
            <div>
                <div className={cx('wrapper-project')}>
                   <BasicTabs/>
                </div> 
            </div>
        </div>
    )
}
export default Sidebar;