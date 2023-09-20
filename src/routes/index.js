import { faHouse} from '@fortawesome/free-solid-svg-icons';
import Overview from '~/pages/Overview';
import MyDay from '~/pages/MyDay';
import Important from '~/pages/Important';
import Planned from '~/pages/Planned';
import AssignedToMe from '~/pages/AssignedToMe';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import { faCalendar, faStar, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import Register from '~/pages/Register';
const publicRoutes =[
    {   
        path: '/', 
        component: Home,
        icon: faHouse,
        name: 'Trang chủ',
        pageCode : 1
    },
    {   
        path: '/login', 
        component: Login,
        icon: faHouse,
        name: 'Đăng nhập',
        pageCode : 2
    }
    ,
    {   
        path: '/register', 
        component: Register,
        icon: faHouse,
        name: 'Tạo tài khoản',
        pageCode : 2
    }
]
const sidebarRoutes = [
    {   
        path: '/overview', 
        component: Overview,
        icon: faHouse,
        name: 'Tổng quan',
        id: 1,
        state: true
    },
    {
        path: '/myday', 
        component: MyDay,
        icon: faSun,
        name: 'Ngày của tôi',
        id: 2,
        state: true
    },
    {
        path: '/important', 
        component: Important,
        icon: faStar,
        name: 'Quan trọng',
        id: 3,
        state: false
    },
    {
        path: '/planned', 
        component: Planned,
        icon: faCalendar,
        name: 'Đã lập kế hoạch',
        id: 4,
        state: false
    },
    {
        path: '/assigned_to_me', 
        component: AssignedToMe,
        icon: faUser,
        name: 'Đã giao cho tôi',
        id: 5,
        state: true
    }
]
const privateRoutes =[
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

export {publicRoutes , privateRoutes , sidebarRoutes};