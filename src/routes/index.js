import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Overview from '~/pages/Overview';
import Calendar from '~/pages/Calendar';
import AllTask from '~/pages/AllTask';
import MyWorks from '~/pages/MyWorks';
import Workloads from '~/pages/Workloads';
const publicRoutes =[
    {   path : '/', 
        component: Overview,
        icon : faHouse,
        name : 'Overview'
    },
    {
        path : '/calendar', 
        component: Calendar,
        icon : faHouse,
        name : 'Calendar'
    },
    {
        path : '/alltask', 
        component: AllTask,
        icon : faHouse,
        name : 'All Tasks'
    },
    {
        path : '/myworks', 
        component: MyWorks,
        icon : faHouse,
        name : 'My Works'
    },
    {
        path : '/workloads', 
        component: Workloads,
        icon : faHouse,
        name : 'Workloads'
    },
]
const privateRoutes =[
    
]

export {publicRoutes , privateRoutes};