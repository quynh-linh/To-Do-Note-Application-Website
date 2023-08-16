import { faHouse} from '@fortawesome/free-solid-svg-icons';
import Overview from '~/pages/Overview';
import MyDay from '~/pages/MyDay';
import Important from '~/pages/Important';
import Planned from '~/pages/Planned';
import AssignedToMe from '~/pages/AssignedToMe';
import Home from '~/pages/Home';
import { faCalendar, faStar, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
const publicRoutes =[
    {   
        path : '/', 
        component: Home,
        icon : faHouse,
        name : 'Trang chủ',
        id : 1
    },
    {   
        path : '/overview', 
        component: Overview,
        icon : faHouse,
        name : 'Tổng quan',
        id : 2
    },
    {
        path : '/myday', 
        component: MyDay,
        icon : faSun,
        name : 'Ngày của tôi',
        id : 3
    },
    {
        path : '/important', 
        component: Important,
        icon : faStar,
        name : 'Quan trọng',
        id : 4
    },
    {
        path : '/planned', 
        component: Planned,
        icon : faCalendar,
        name : 'Đã lập kế hoạch',
        id : 5
    },
    {
        path : '/assigned_to_me', 
        component: AssignedToMe,
        icon : faUser,
        name : 'Đã giao cho tôi',
        id : 6
    }
]
const sidebarRoutes = [
    {   
        path : '/overview', 
        component: Overview,
        icon : faHouse,
        name : 'Tổng quan',
        id : 1
    },
    {
        path : '/myday', 
        component: MyDay,
        icon : faSun,
        name : 'Ngày của tôi',
        id : 2
    },
    {
        path : '/important', 
        component: Important,
        icon : faStar,
        name : 'Quan trọng',
        id : 3
    },
    {
        path : '/planned', 
        component: Planned,
        icon : faCalendar,
        name : 'Đã lập kế hoạch',
        id : 4
    },
    {
        path : '/assigned_to_me', 
        component: AssignedToMe,
        icon : faUser,
        name : 'Đã giao cho tôi',
        id : 5
    }
]
const privateRoutes =[
    
]

export {publicRoutes , privateRoutes , sidebarRoutes};