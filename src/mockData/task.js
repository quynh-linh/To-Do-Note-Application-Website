// LIST DATA TODO
const LIST_TODO = [
    {
        id: 1,
        title: 'Học bài',
        des: 'Được thực hiện vào ngày mai',
        priority : 'Danh mục đỏ',
        notes : '',
        status:'waiting',
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
    },
    {
        id: 2,
        title: 'Đi làm',
        des: 'Từ 6 AM to 19 PM',
        priority : 'Danh mục cam',
        notes : '',
        status:'waiting',
        deadline : {
            title : 'Hôm nay',
            date : '13/09/2023'
        },
        repeat : {
            state : true,
            title : 'Ngày trong tuần'
        },
        notify : {
            title : 'Hôm nay',
            dateTime : '7:00 AM'
        },
    }
]
export {LIST_TODO} 