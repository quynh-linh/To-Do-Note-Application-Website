import classNames from "classnames/bind";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.scss'


const cx = classNames.bind(styles);
const localizer = momentLocalizer(moment)

function MyCalendar(){
    return (
        <Calendar
            localizer={localizer}
            //events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 , backgroundColor : '#2e384e' , color : 'white' }}
        />
    )
}
export default MyCalendar;