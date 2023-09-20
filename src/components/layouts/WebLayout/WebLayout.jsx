import className from 'classnames/bind';
import styles from "./WebLayout.module.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const cx = className.bind(styles);
function WebLayout({children}){
    return (
        <div className={cx('container')}>
            <Header/>   
            {children}
            <Footer/>
        </div>
    )
}
export default WebLayout;
