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
    const [valueOnScrollTopWindow,setOnScrollTopWindow] = useState(0);
    const location = useLocation();
    const currentPath = location.pathname;

    // SET SCROLL TOP FOR VALUE ON SCROLL THEN SEND THE DATA TO COMPONENTS HEADER
    const handleOnScrollWindow = (e) => {
        setOnScrollTopWindow(e.target.scrollTop);
    };
    return (
        <div className={cx('wrapper')}  onScroll={(e) => handleOnScrollWindow(e)}>
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
                        <Header onScroll={valueOnScrollTopWindow}/>
                        {children}
                        <Footer/>
                    </div>
                )
            } 
        </div>
    )
}
export default WebLayout;
