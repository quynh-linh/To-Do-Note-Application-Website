import className from 'classnames/bind';
import styles from "./WebLayout.module.scss"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingPage from '../components/LoadingPage';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const cx = className.bind(styles);
function WebLayout({children}){
    const [isOpenPage,setOpenPage] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath);
    return (
        <div className={cx('wrapper')}>
            {
                currentPath === '/' ? (
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
                ) : (
                    <div className={cx('container')}>
                        <Header/>
                        {children}
                        <Footer/>
                    </div>
                )
            } 
        </div>
    )
}
export default WebLayout;
