import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight , faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// 
import styles from './Sidebar.module.scss'
import { publicRoutes } from "~/routes";
const cx = className.bind(styles);
function Header(){
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
                    <button className={cx('wrapper-project_btn')}>PROJECT</button>
                    <button className={cx('wrapper-project_btn')}>CHAT</button>
                </div>
                <div className={cx('search-project')}>
                    <input className={cx('search-project_input')} type="text" placeholder='Go to Project'/>
                    <button className={cx('create-project')}>
                        <FontAwesomeIcon className={cx('icon-faPlus')} icon={faPlus}/>
                    </button>
                </div>
                <div className={cx('detail-project')}>
                        
                </div>
            </div>
       </div>
    )
}
export default Header;