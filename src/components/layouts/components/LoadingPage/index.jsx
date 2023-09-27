
import className from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './LoadingPage.module.scss'
const LoadingPage = ({isState=undefined,children}) => {
    const cx = className.bind(styles);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
          isState(true);
        }, 5000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cx("container")}>
            {isLoading ? (
                <div className={cx("cssload-preloader")}>
                    <div className={cx("cssload-preloader-box")}>		
                        <div>Q</div>		
                        <div>U</div>		
                        <div>Y</div>		
                        <div>N</div>		
                        <div>H</div>		
                        <div>L</div>		
                        <div>I</div>		
                        <div>N</div>		
                        <div>H</div>		
                        <div>T</div>		
                        <div>O</div>		
                        <div>D</div>		
                        <div>O</div>
                    </div>
                    <div id={styles['circular3dG']}>
                        <div id={styles['circular3d_1G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_2G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_3G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_4G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_5G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_6G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_7G']} className={cx("circular3dG")}></div>
                        <div id={styles['circular3d_8G']} className={cx("circular3dG")}></div>
                    </div>
                </div>
            ) : (
                children
            )
            }
        </div>
    );
};
export default LoadingPage;
