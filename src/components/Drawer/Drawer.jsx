import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Drawer.module.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Drawer({title, onClose, children,type=''}) {
    const cx = className.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('drawer-content')}>
                {
                    type === '' 
                    ? (
                        <div className={cx('drawer-header')}>
                            <h3 className={cx('drawer-title')}>{title}</h3>
                            <button className={cx('drawer-btnClose')} onClick={onClose}>
                                <FontAwesomeIcon className={cx('icon-close')} icon={faXmark}/>
                            </button>
                        </div>
                    ) 
                    : 
                    ''
                }
                {children}
            </div>  
        </div>
    )
}
export default Drawer;