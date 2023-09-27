import className from 'classnames/bind';
import styles from "./WebLayout.module.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingPage from '../components/LoadingPage';
import { useState } from 'react';
const cx = className.bind(styles);
function WebLayout({children}){
    const [isOpenPage,setOpenPage] = useState(false);
    return (
        <LoadingPage isState={(e) => {setOpenPage(e)}}>
            {
                isOpenPage && (
                    <div className={cx('container')}>
                        <Header/>   
                        {children}
                        <Footer/>
                    </div>
                )
            }
        </LoadingPage>
    )
}
export default WebLayout;
