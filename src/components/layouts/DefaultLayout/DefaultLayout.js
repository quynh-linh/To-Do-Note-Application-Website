import className from 'classnames/bind';
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import styles from "./DefaultLayout.module.scss"
const cx = className.bind(styles);
function DefaultLayout({children}){
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}
export default DefaultLayout;
