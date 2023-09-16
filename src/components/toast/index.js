import { toast } from "react-toastify";

export const Toast = ({type,title,position,autoClose,limit}) =>{
    if(type === 'info') {
        toast.info('Trang '+ title +' đang phát triển', {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            limit: limit
        });
    } else if (type === 'success') {
        toast.success('Trang '+ title +' đang phát triển', {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            limit: limit
        });
    } else if(type === 'warning'){
        toast.warning('Trang '+ title +' đang phát triển', {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            limit: limit
        });
    } else if(type === 'error'){
        toast.error('Trang '+ title +' đang phát triển', {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            limit: limit
        });
    }
};