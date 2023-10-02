import classNames from "classnames/bind";
import styles from './Introduce.module.scss'
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { useState } from "react";
import { DATA_QUESTION } from "~/const";
import QuestionItem from "./QuestionItem";
import { Toast } from "~/components/toast";
import { Link } from "react-router-dom";
function Introduce() {
    const cx=classNames.bind(styles);
    const [isCheckQuestionCLick,setCheckQuestionClick] = useState('');
    const [isUnbentQuestion,setUnbentQuestion] = useState(false);
    
    // HANDLE SET QUESTION = UNBENT AND SET OPEN UNBENT = TRUE
    const handleClickUnbent  = () => {
        setCheckQuestionClick('Unbent');
        setUnbentQuestion(true);
    };

    // HANDLE SET QUESTION = RETRACT AND SET OPEN UNBENT = FALSE
    const handleClickRetract  = () => {
        setCheckQuestionClick('Retract');
        setUnbentQuestion(false);
    };

    // HANDLE CLICK DOWNLOAD APP
    const handleCLickDownLoadApp = () => {
        Toast({type:'info',title: "Tải xuống",position:'bottom-left',autoClose:1000,limit:1,des:'function'});
    };

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__slider')}>
                <div className={cx('wrapper__slider-Left')}>
                    <div className={cx('wrapper__slider-Left-title')}>
                        <h1 >Ứng dụng TODO APP</h1>
                    </div>
                    <div className={cx('wrapper__slider-Left-des')}>
                        <span>Tập trung, từ làm việc đến giải trí với ứng dụng danh sách việc cần làm tốt nhất.
                        </span>
                    </div>
                    <div className={cx('wrapper__slider-Left-btn')}>
                        <Link to={'/'}><button type="button" className={cx('wrapper__slider-Left-btn-OpenApp')}>Mở ứng dụng web</button></Link>
                        <button type="button" className={cx('wrapper__slider-Left-btn-DownApp')}  onClick={handleCLickDownLoadApp}>Tải xuống ứng dụng </button>
                    </div>
                </div>
                <div className={cx('wrapper__slider-Right')}>
                    <img src={images.IntroduceSlide} alt="Introduce Slider App"></img>
                </div>
            </div>
            <div className={cx('wrapper__work')}>
                <div className={cx('wrapper__work-Left')}>
                    <img src={images.IntroduceWork} alt="Introduce Work App"></img>
                </div>
                <div className={cx('wrapper__work-Right')}>
                    <div className={cx('wrapper__work-Right-title')}>
                        <h1>Trình lập kế hoạch hàng ngày thông minh</h1>
                    </div>
                    <div className={cx('wrapper__work-Right-des')}>
                        <span>Sẵn sàng đón nhận thành công cùng Ngày của tôi, những đề xuất thông minh và được cá nhân hóa để cập nhật 
                            danh sách việc cần làm hàng ngày hoặc hàng tuần của bạn. Với việc có sẵn cả ứng dụng Microsoft To Do trên 
                            máy tính và ứng dụng dành cho thiết bị di động, bạn có thể dễ dàng duy trì sự tập trung vào công việc suốt cả ngày.
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper__manager')}>
                <div className={cx('wrapper__manager-Left')}>
                    <div className={cx('wrapper__manager-Left-title')}>
                        <h1>Quản lý trực tuyến danh sách việc cần làm</h1>
                    </div>
                    <div className={cx('wrapper__manager-Left-des')}>
                        <span>Ứng dụng quản lý nhiệm vụ đa nền tảng đích thực. Dù bạn đang dùng ứng dụng trên máy tính khi ở nhà hay ứng 
                            dụng dành cho thiết bị di động khi di chuyển, bạn đều có thể truy nhập vào danh sách nhiệm vụ và luôn sắp xếp 
                            mọi thứ khoa học.
                        </span>
                    </div>
                </div>
                <div className={cx('wrapper__manager-Right')}>
                    <img src={images.IntroduceWorkGIF} alt="Introduce Work App GIF"></img>
                </div>
            </div>
            <div className={cx('wrapper__SeeMore')}>
                <div className={cx('wrapper__SeeMore-title')}>
                    <h2>Xem thêm từ Quynh Linh To Do</h2>
                </div>
                <div className={cx('wrapper__SeeMore-content')}>
                    <div className={cx('wrapper__SeeMore-content-Left')}>
                        <FontAwesomeIcon icon={faListCheck} className={cx('wrapper__SeeMore-content-Left-icon')}/>
                        <div className={cx('wrapper__SeeMore-content-Left-title')}>Tích hợp Nhiệm vụ Outlook</div>
                        <div className={cx('wrapper__SeeMore-content-Left-des')}>To Do được tích hợp với Nhiệm vụ Outlook, giúp bạn dễ dàng quản lý mọi nhiệm vụ ở cùng một nơi.</div>
                    </div>
                    <div className={cx('wrapper__SeeMore-content-Right')}>
                        <BrowserUpdatedIcon className={cx('wrapper__SeeMore-content-Left-icon')}/>
                        <div className={cx('wrapper__SeeMore-content-Left-title')}>Truy nhập từ mọi nơi</div>
                        <div className={cx('wrapper__SeeMore-content-Left-des')}>Microsoft To Do được cung cấp miễn phí và đồng bộ trên iPhone, Android, Windows cũng như web.</div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper__Question')}>
                <h1 className={cx('wrapper__Question-title')}>Các câu hỏi thường gặp</h1>
                <div className={cx('wrapper__Question-content')}>
                    <div className={cx('wrapper__Question-content-menu')}>
                        <span className={cx('wrapper__Question-content-menu-Unbent',
                            isCheckQuestionCLick ? (isCheckQuestionCLick === 'Unbent' ? 'wrapper__Question-content-menu-checked' : 'wrapper__Question-content-menu-check')
                            :'')} 
                            onClick={handleClickUnbent}
                        >
                            Bung rộng tất cả
                        </span>
                        <span className={cx('wrapper__Question-content-menu-Line')}>|</span>
                        <span className={cx('wrapper__Question-content-menu-Retract',
                            isCheckQuestionCLick ? (isCheckQuestionCLick === 'Retract' ? 'wrapper__Question-content-menu-checked' : 'wrapper__Question-content-menu-check')
                            : '')} 
                            onClick={handleClickRetract}
                        >
                            Thu gọn tất cả
                        </span>
                    </div>
                    <div className={cx('wrapper__Question-content-listQuestion')}>
                        {
                            DATA_QUESTION.map( (item,index) => {
                                return(
                                    <QuestionItem 
                                        unbent={isUnbentQuestion}
                                        key={index}
                                        name={item.name}
                                        des={item.des}
                                    />
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Introduce;