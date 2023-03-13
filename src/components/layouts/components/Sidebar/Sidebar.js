import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight , faPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
// 
import styles from './Sidebar.module.scss'
import { publicRoutes } from "~/routes";
import ProjectData from './ProjectData';
import SubProject from './SubProject';
import CustomInput from '~/components/input/input';

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
                    <button className={cx('wrapper-project_btn')}>PROJECT</button>
                    <button className={cx('wrapper-project_btn')}>CHAT</button>
                </div>
                <div className={cx('search-project')}>
                    <CustomInput/>
                </div>
                <div className={cx('project')}>
                    <ul className={cx('project-ul')}>
                        <li className={cx('project-li')}>
                            {
                                ProjectData.map((item, index) => {
                                    return <SubProject item={item} key={index}></SubProject>
                                })
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;