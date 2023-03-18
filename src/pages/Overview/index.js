import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faListCheck} from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import styles from "./Overview.module.scss";
import WeekPieChart from "./Chart.js"
import MyCalendar from './Calendar';

const cx = className.bind(styles);
const percentageCompleted = 100;
const percentageInprogress = 40;

function Overview(){
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-box_left')}>
                <div className={cx('wrapper-box_left-task')}>
                    <div className={cx('wrapper-completed')}>
                        <div className={cx('completed-notebook')} >
                            <FontAwesomeIcon className={cx('completed-faNoteSticky')}  icon={faBook}></FontAwesomeIcon>
                            <div className={cx('completed-count_task')}>
                                <h3>12 Task</h3>
                                <p>Completed</p>
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
                              })} />;
                        </div>
                    </div>
                    <div className={cx('wrapper-completed')}>
                        <div className={cx('completed-notebook')} >
                            <FontAwesomeIcon className={cx('completed-faNoteSticky')}  icon={faBook}></FontAwesomeIcon>
                            <div className={cx('completed-count_task')}>
                                <h3>4 Task</h3>
                                <p>In Progress</p>
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
                              })} />;
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-box_left-chart')}>
                    <WeekPieChart/>
                </div>
            </div>
            <div className={cx('wrapper-box_right')}>
                <MyCalendar/>
                <div className={cx('wrapper-box_right_list_task')}>
                    <ul className={cx('list_task-ul')}>
                        <li className={cx('list_task-li')}>
                            <FontAwesomeIcon className={cx('list_task-faListCheck')}  icon={faListCheck}></FontAwesomeIcon>
                            <div className={cx('list_task-info')}>
                                <h3>Donation Mobile App</h3>
                                <p>Product design</p>
                            </div>
                        </li>
                        <li className={cx('list_task-li')}>
                            <FontAwesomeIcon className={cx('list_task-faListCheck')}  icon={faListCheck}></FontAwesomeIcon>
                            <div className={cx('list_task-info')}>
                                <h3>Learn React JS Programming</h3>
                                <p>Write a note app website</p>
                            </div>
                        </li>
                        <li className={cx('list_task-li')}>
                            <FontAwesomeIcon className={cx('list_task-faListCheck')}  icon={faListCheck}></FontAwesomeIcon>
                            <div className={cx('list_task-info')}>
                                <h3>Learn to program Type Scripts</h3>
                                <p>Strengthening the JS knowledge base</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Overview;