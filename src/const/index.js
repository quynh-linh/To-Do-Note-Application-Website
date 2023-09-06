import {  faFilter, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import {  faCalendarCheck, faCalendarDays, faCalendarPlus, faClock, faStar } from '@fortawesome/free-regular-svg-icons';
const MENU_ITEMS_DEADLINE = [
    {
        id : 1,
        icon : faCalendarDays,
        title : 'Hôm nay',
        day  : 'T3'
    },
    {
        id : 2,
        icon : faCalendarDays,
        title : 'Ngày mai',
        day  : 'T4'
    },
    {
        id : 3,
        icon : faCalendarDays,
        title : 'Tuần tới',
        day  : 'T2'
    }
];
const MENU_ITEMS_REMIND = [
    {
        id : 1,
        icon : faClock,
        title : 'Cuối ngày',
        day  : 'T3'
    },
    {
        id : 2,
        icon : faClock,
        title : 'Ngày mai',
        day  : 'T4'
    },
    {
        id : 3,
        icon : faClock,
        title : 'Tuần tới',
        day  : 'T2'
    }
];
const MENU_ITEMS_REPEAT = [
    {
        id : 1,
        icon : faCalendarDays,
        title : 'Hằng ngày',
        day  : 'T3'
    },
    {
        id : 2,
        icon : faCalendarDays,
        title : 'Ngày trong tuần',
        day  : 'T4'
    },
    {
        id : 3,
        icon : faCalendarDays,
        title : 'Hằng tuần',
        day  : 'T2'
    },
    {
        id : 3,
        icon : faCalendarDays,
        title : 'Hằng tháng',
        day  : 'T2'
    },
    {
        id : 3,
        icon : faCalendarDays,
        title : 'Hằng năm',
        day  : 'T2'
    }
];
const MENU_ITEMS_SORT = [
    {
        id : 1,
        icon : faStar,
        title : 'Tầm quan trọng',
    },
    {
        id : 2,
        icon : faCalendarCheck,
        title : 'Ngày hết hạn',
    },
    {
        id : 3,
        icon : faFilter,
        title : 'Theo thứ tự',
    },
    {
        id : 4,
        icon : faCalendarPlus,
        title : 'Ngày tạo',
    },
];
const MENU_ITEMS_GROUP = [
    {
        id : 1,
        icon : faNoteSticky,
        title : 'Loại',
    }
];
export {MENU_ITEMS_DEADLINE,MENU_ITEMS_REMIND,MENU_ITEMS_REPEAT,MENU_ITEMS_SORT,MENU_ITEMS_GROUP};