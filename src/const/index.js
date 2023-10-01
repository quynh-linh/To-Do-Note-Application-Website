import { faFilter, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import {  faCalendarCheck, faCalendarDays, faCalendarPlus, faClock, faStar ,faCircle} from '@fortawesome/free-regular-svg-icons';

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
// const formattedTime = () => {
//     const today = new Date();
//     // Trích xuất giờ, phút và giây
//     const hour = today.getHours();
//     const minute = today.getMinutes();
//     const second = today.getSeconds();
//     return hour.toString().padStart(2, '0') + ':' +minute.toString().padStart(2, '0') + ':' +second.toString().padStart(2, '0');
// };
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
// // DATA REAL TIME
const today= new Date();
const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const date = 'ngày ' + today.getDate() + ' tháng ' + (today.getMonth() + 1);
const dayName = days[today.getDay()];


// TODAY
const myday = formattedDate(0);
const convertToday = formatDateToDays(myday);
const REAL_TIME = dayName + "," + date;
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
        value: myday,
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
        hours : '10PM tối',
        value: myday
    },
    {
        id : 1,
        icon : faClock,
        title : 'Ngày mai',
        day  : convertTomorrow+',',
        hours : '9AM sáng',
        value: tomorrow
    },
    {
        id : 2,
        icon : faClock,
        title : 'Tuần tới',
        day  : convertNextWeeks+',',
        hours : '9AM sáng',
        value: nextWeeks
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

// LIST CATEGORY COLOR 
const MENU_ITEMS_CATEGORY = [
    {
        id : 1,
        icon : faCircle,
        title : 'Danh mục đỏ',
    },
    {
        id : 2,
        icon : faCircle,
        title : 'Danh mục cam',
    },
    {
        id : 3,
        icon : faCircle,
        title : 'Danh mục xanh',
    }
];


// LIST DATA TODO
const LIST_TODO_COMPLETED = [
    {
        id: 'djJYWkbeDCGGvT8TEKbphFzpKd25qRzLWYGhEmmK',
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        status: 'completed',
        deadline : {
            title : '',
            date : ''
        },
        repeat : {
            state : false,
            title : ''
        },
        notify : {
            title : '',
            dateTime : ''
        },
    }
]
const DATA_SETTINGS = [
    {
        id: 1,
        title: 'Tổng quát',
        item: [
            {
                id: 1,
                name: 'Xác nhận trước khi xóa',
                status: false,
            },
            {
                id: 2,
                name: 'Thêm tác vụ mới ở đầu',
                status: false,
            },
            {
                id: 3,
                name: 'Di chuyển tác vụ gắn dấu sao lên đầu',
                status: false,
            },
            {
                id: 4,
                name: 'Phát âm thanh hoàn thiện',
                status: false,
            },
            {
                id: 5,
                name: 'Hiển thị menu bấm chuột phải',
                status: false,
            },
            {
                id: 6,
                name: 'Bật thông báo nhắc nhở',
                status: false,
            },
            {
                id: 7,
                name: 'Bật chế độ ban đêm',
                status: false,
            },
        ],
    },
    {
        id: 2,
        title: 'Danh sách thông minh',
        item: [
            {
                id: 1,
                name: 'Quan trọng',
                status: false,
            },
            {
                id: 2,
                name: 'Đã lập kế hoạch',
                status: false,
            },
            {
                id: 3,
                name: 'Tất cả',
                status: false,
            },
            {
                id: 4,
                name: 'Đã hoàn thành',
                status: false,
            },
            {
                id: 5,
                name: 'Đã giao cho tôi',
                status: false,
            },
            {
                id: 6,
                name: 'Tự động ẩn danh sách thông minh trống',
                status: false,
            },
            {
                id: 7,
                name: 'Hiển thị các nhiệm vụ “Đến hạn vào hôm nay” trong Ngày của tôi',
                status: false,
            },
        ],
    },
    {
        id: 3,
        title: 'Ứng dụng được kết nối',
        item: [
            {
                id: 1,
                name: 'Planner',
                description: 'Tác vụ giao cho bạn trong Planner',
                status: false,
            },
        ],
    },
    {
        id: 4,
        title: 'Thông báo',
        item: [
            {
                id: 1,
                name: 'Email',
                description: 'Nhận thông báo khi một danh sách được chia sẻ với bạn',
                status: false,
            },
        ],
    },
];

const NAV_MENU_ITEMS = [
    {
        id : 0,
        name : 'Teams',
        state:false
    },
    {
        id : 1,
        name : 'Window',
        state:false
    },
    {
        id : 2,
        name : 'Surface',
        state:false
    },
    {
        id : 3,
        name : 'Xbox',
        state:false
    },
    {
        id : 4,
        name : 'Deals',
        state:false
    },
];

// QUESTION 
const DATA_QUESTION = [
    {
        id : 1,
        name : 'Mục đích của danh sách việc cần làm là gì?',
        des: 'Mục đích chính của danh sách việc cần làm là mang đến cho bạn một danh sách các việc ưu tiên để đảm bảo rằng bạn không quên bất cứ việc gì và có thể lập kế hoạch hiệu quả cho các nhiệm vụ của mình để có thể hoàn thành trong khung thời gian chính xác. Một danh sách việc cần làm được duy trì tốt sẽ giúp tâm trí bạn thoải mái vì bạn sẽ luôn biết rõ những việc cần hoàn thành.'
    },
    {
        id : 2,
        name : 'Tại sao danh sách việc cần làm lại quan trọng?',
        des: 'Danh sách việc cần làm rất quan trọng vì danh sách này giúp duy trì các nhiệm vụ và nghĩa vụ của theo đúng trình tự. Một danh sách được sắp xếp khoa học sẽ giúp bạn dễ dàng quản lý công việc và tập trung tinh thần vào các nhiệm vụ trước mắt.'
    },
    {
        id : 3,
        name : 'Khi nào thì bạn nên lập danh sách việc cần làm?',
        des: 'Thời điểm tốt nhất để lập danh sách việc cần làm hằng ngày là buổi tối hôm trước hoặc là việc đầu tiên vào buổi sáng. Lợi ích lớn nhất của danh sách việc cần làm được sắp xếp khoa học là bạn luôn an tâm khi có sẵn kế hoạch. Khi đi ngủ mà đã có sẵn kế hoạch cho ngày hôm sau, bạn sẽ có thể ngủ ngon hơn. Khi lập danh sách là việc đầu tiên bạn làm vào buổi sáng, bạn sẽ có kế hoạch cho một ngày thành công.'
    },
    {
        id : 4,
        name : 'Danh sách việc cần làm nên có bao nhiêu mục?',
        des: 'Điều quan trọng là bạn có thể dễ dàng quản lý danh sách việc cần làm. Danh sách nhiệm vụ bất khả thi có thể làm tăng cảm giác căng thẳng. Thông thường, bạn nên tạo tối đa 3 mục trong danh sách việc cần làm. Nếu bạn cần có trên 3 mục, hãy tìm cách đưa vào không quá 1 nhiệm vụ "lớn" và điền vào danh sách một số nhiệm vụ "vừa" hoặc "nhỏ" dễ hoàn thành.'
    },
    {
        id : 5,
        name : 'Tôi có thể làm cách nào để tạo danh sách việc cần làm trên điện thoại?',
        des: 'Các ứng dụng danh sách việc cần làm, như ứng dụng Microsoft To Do là cách tốt nhất để tạo danh sách việc cần làm trên điện thoại của bạn. Với Microsoft To Do, bạn có thể dễ dàng tạo và đồng bộ danh sách nhiệm vụ trên nhiều thiết bị để luôn có sẵn danh sách việc cần làm bất kể bạn đang dùng máy tính, điện thoại hay máy tính bảng.'
    }
];
export {
    // DATA MENU (PAGE MY DAYS)
    MENU_ITEMS_DEADLINE,
    MENU_ITEMS_REMIND,
    MENU_ITEMS_REPEAT,
    MENU_ITEMS_SORT,
    MENU_ITEMS_GROUP,
    MENU_ITEMS_CATEGORY,

    // DATA SETTINGS (DEFAULT LAYOUT)
    DATA_SETTINGS,

    // REAL TIME (PAGE MY DAYS)
    REAL_TIME,

    // LIST COMPLETED TASK (PAGE MY DAYS)
    LIST_TODO_COMPLETED,

    // DATA NAV MENU (WEB LAYOUT)
    NAV_MENU_ITEMS,

    // DATA QUESTION (INTRODUCE LAYOUT)
    DATA_QUESTION
};