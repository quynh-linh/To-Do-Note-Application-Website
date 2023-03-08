import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 
import styles from './Sidebar.module.scss'
import { faCaretRight , faHouse, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);
const lists = [
    {
        icon : faHouse,
        name : 'Overview'
    },
    {
        icon : faHouse,
        name : 'Workloads'
    },
    {
        icon : faHouse,
        name : 'Calendar'
    },
    {
        icon : faHouse,
        name : 'All Tasks'
    }
    ,
    {
        icon : faHouse,
        name : 'My Works'
    }
]
function Header(){
    return(
       <div className={cx('wrapper')}>
            <div className={cx('wrapper-list')}>
                <ul className={cx('wrapper-list_ul')}>
                    {
                        lists.map((item, index) => {
                            return (
                                <li key={index} className={cx('wrapper-list_li')}>
                                    {<FontAwesomeIcon icon={item.icon}/>}
                                    <h4>{item.name}</h4>
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
                    <button>
                        <FontAwesomeIcon className={cx('icon-faSearch')} icon={faSearch}/>
                    </button>
                    <input className={cx('search-project_input')} type="text" placeholder='Go to Project'/>
                    <button className={cx('create-project')}>
                        <FontAwesomeIcon className={cx('icon-faPlus')} icon={faPlus}/>
                    </button>
                </div>
            </div>
       </div>
    )
}
export default Header;