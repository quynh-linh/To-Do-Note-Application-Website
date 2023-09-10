import {  faFilter, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import {  faCalendarCheck, faCalendarDays, faCalendarPlus, faClock, faStar } from '@fortawesome/free-regular-svg-icons';

// New string with format "dd/mm/yyyy"
const formattedDate = (days) => {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + days));
    // Export day, month and year to object Date
    const day = String(futureDate.getDate()).padStart(2, '0');
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const year = futureDate.getFullYear();
    return `${day}/${month}/${year}`;
};
// Convert to string :a hh:mm:ss
const formattedTime = () => {
    const today = new Date();
    // Trích xuất giờ, phút và giây
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    return hour.toString().padStart(2, '0') + ':' +minute.toString().padStart(2, '0') + ':' +second.toString().padStart(2, '0');
};
// CONVERT DAY DD/MM/YYYY to T${DD}
const formatDateToDays = (dateStr) => {
    // Array containing days of the week
    const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    // Extract day, month and year from string
    var parts = dateStr.split('/');
    var day = parseInt(parts[0], 10); // Convert Integer
    // Get the day of the week from the mapping array
    return daysOfWeek[new Date(parts[2], parts[1] - 1, day).getDay()];
}

// TODAY
const today = formattedDate(0);
const convertToday = formatDateToDays(today);

// TOMORROW
const tomorrow = formattedDate(1);
const convertTomorrow = formatDateToDays(tomorrow);

// NEXT WEEKS
const nextWeeks = formattedDate(7);
const convertNextWeeks = formatDateToDays(nextWeeks);

// LIST DATA MENU ITEM DEADLINE
const MENU_ITEMS_DEADLINE = [
    {   
        id: 0,
        icon: faCalendarDays,
        title: 'Hôm nay',
        value: today,
        day: convertToday
    },
    {
        id : 1,
        icon : faCalendarDays,
        title : 'Ngày mai',
        value: tomorrow,
        day  : convertTomorrow
    },
    {
        id : 2,
        icon : faCalendarDays,
        title : 'Tuần tới',
        value: nextWeeks,
        day  : convertNextWeeks
    }
];

// LIST DATA MENU REMIND
const MENU_ITEMS_REMIND = [
    {
        id : 0,
        icon : faClock,
        title : 'Cuối ngày',
        day  : '',
        hours : '10PM tối'
    },
    {
        id : 1,
        icon : faClock,
        title : 'Ngày mai',
        day  : convertTomorrow+',',
        hours : '9AM sáng'
    },
    {
        id : 2,
        icon : faClock,
        title : 'Tuần tới',
        day  : convertNextWeeks+',',
        hours : '9AM sáng'
    }
];

// LIST DATA MENU REPEAT
const MENU_ITEMS_REPEAT = [
    {
        id : 1,
        icon : faCalendarDays,
        title : 'Hằng ngày',
        day  : ''
    },
    {
        id : 2,
        icon : faCalendarDays,
        title : 'Ngày trong tuần',
        day  : ''
    },
    {
        id : 3,
        icon : faCalendarDays,
        title : 'Hằng tuần',
        day  : ''
    }
];

// LIST DATA MENU SORT FILTER
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

// LIST DATA MENU GROUP CATEGORY
const MENU_ITEMS_GROUP = [
    {
        id : 1,
        icon : faNoteSticky,
        title : 'Loại',
    }
];

// LIST DATA TODO
const LIST_TODO = [
    {
        id: 0,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 1,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 2,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 3,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 4,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 5,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 6,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 6,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 6,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 6,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    },
    {
        id: 6,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        deadline : 'Hôm nay',
        repeat : true,
        notify : 'Hôm nay',
    }
]
export {MENU_ITEMS_DEADLINE,MENU_ITEMS_REMIND,MENU_ITEMS_REPEAT,MENU_ITEMS_SORT,MENU_ITEMS_GROUP,LIST_TODO};