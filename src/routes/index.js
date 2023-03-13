import { faBars, faCloudUpload, faHouse, faListCheck } from '@fortawesome/free-solid-svg-icons';
import Overview from '~/pages/Overview';
import Calendar from '~/pages/Calendar';
import AllTask from '~/pages/AllTask';
import MyWorks from '~/pages/MyWorks';
import Workloads from '~/pages/Workloads';
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
const publicRoutes =[
    {   path : '/', 
        component: Overview,
        icon : faHouse,
        name : 'Overview'
    },
    {
        path : '/calendar', 
        component: Calendar,
        icon : faCalendarPlus,
        name : 'Calendar'
    },
    {
        path : '/alltask', 
        component: AllTask,
        icon : faListCheck,
        name : 'All Tasks'
    },
    {
        path : '/myworks', 
        component: MyWorks,
        icon : faBars,
        name : 'My Works'
    },
    {
        path : '/workloads', 
        component: Workloads,
        icon : faCloudUpload,
        name : 'Workloads'
    },
]
const privateRoutes =[
    
]

export {publicRoutes , privateRoutes};