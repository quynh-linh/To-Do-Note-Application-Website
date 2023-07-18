import { faHouse} from '@fortawesome/free-solid-svg-icons';
import Overview from '~/pages/Overview';
import MyDay from '~/pages/MyDay';
import Important from '~/pages/Important';
import Planned from '~/pages/Planned';
import AssignedToMe from '~/pages/AssignedToMe';
import { faCalendar, faStar, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
const publicRoutes =[
    {   
        path : '/', 
        component: Overview,
        icon : faHouse,
        name : 'Trang chủ',
        index : 0
    },
    {
        path : '/myday', 
        component: MyDay,
        icon : faSun,
        name : 'Ngày của tôi',
        index : 1
    },
    {
        path : '/important', 
        component: Important,
        icon : faStar,
        name : 'Quan trọng',
        index : 2
    },
    {
        path : '/planned', 
        component: Planned,
        icon : faCalendar,
        name : 'Đã lập kế hoạch',
        index : 3
    },
    {
        path : '/assigned_to_me', 
        component: AssignedToMe,
        icon : faUser,
        name : 'Đã giao cho tôi',
        index : 4
    }
]
const privateRoutes =[
    
]

export {publicRoutes , privateRoutes};