import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faListCheck} from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import styles from "./Overview.module.scss";
import WeekPieChart from "./Chart.jsx"
import MyCalendar from '../../components/Calendar/Calendar';
import { CircularProgress } from '@mui/material';
import { useState , useEffect } from 'react';
function Overview(){
    const cx = className.bind(styles);
    // LOADING PAGE
    const [loading, setLoading] = useState(true);
    // SET LOADING PAGE 18S
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    const percentageCompleted = 100;
    const percentageInprogress = 40;
    return (
        <div>
            {
                loading ? (
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper__loading')}>
                            <p>Đang tải trang</p>
                            <CircularProgress  />
                        </div>
                    </div>
                ) : (
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper-box_left')}>
                            <div className={cx('wrapper-box_left-task')}>
                                <div className={cx('wrapper-completed')}>
                                    <div className={cx('completed-notebook')} >
                                        <FontAwesomeIcon className={cx('completed-faNoteSticky')}  icon={faBook}></FontAwesomeIcon>
                                        <div className={cx('completed-count_task')}>
                                            <h3>12 Nhiệm</h3>
                                            <p>Hoàn thành</p>
                                        </div>
                                    </div>
                                    <div className={cx('completed-progress')}>
                                        <CircularProgressbar value={percentageCompleted} text={`${percentageCompleted}%`}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0.25,
                                
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                
                                            // Text size
                                            textSize: '24px',
                                
                                            // How long animation takes to go from one percentageCompleted to another, in seconds
                                            pathTransitionDuration: 0.5,
                                            // Colors
                                            pathColor: `rgba(255, 255, 0, ${percentageCompleted / 100})`,
                                            textColor: '#fff',
                                            fontWeight: 'bold',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#d0e1f9 ',
                                        })} />
                                    </div>
                                </div>
                                <div className={cx('wrapper-completed')}>
                                    <div className={cx('completed-notebook')} >
                                        <FontAwesomeIcon className={cx('completed-faNoteSticky')}  icon={faBook}></FontAwesomeIcon>
                                        <div className={cx('completed-count_task')}>
                                            <h3>4 Nhiệm</h3>
                                            <p>Trong tiến trình</p>
                                        </div>
                                    </div>
                                    <div className={cx('completed-progress')}>
                                        <CircularProgressbar value={percentageInprogress} text={`${percentageInprogress}%`}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0.25,
                                
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',
                                
                                            // Text size
                                            textSize: '24px',
                                
                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,
                                            // Colors
                                            pathColor: `rgba(255, 255, 0, ${percentageInprogress / 100})`,
                                            textColor: '#fff',
                                            fontWeight: 'bold',
                                            trailColor: '#d6d6d6',
                                            
                                            backgroundColor: '#d0e1f9 ',
                                        })} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('wrapper-box_left-chart')}>
                                <WeekPieChart/>
                            </div>
                        </div>
                        <div className={cx('wrapper-box_right')}>
                            <MyCalendar/>
                        </div>
                    </div>
                )
            }
        </div> 
    )
}
export default Overview;