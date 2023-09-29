import classNames from "classnames/bind";
import styles from './Introduce.module.scss'
import images from "~/assets/images";
function Introduce() {
    const cx=classNames.bind(styles);
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__slider')}>
                <div className={cx('wrapper__slider-Left')}>
                    <h1>Ứng dụng TODO APP</h1>
                </div>
                <div className={cx('wrapper__slider-Right')}>
                    <img src={images.IntroduceSlide} alt="Introduce Slider App"></img>
                </div>
            </div>
        </div>    
    );
}

export default Introduce;