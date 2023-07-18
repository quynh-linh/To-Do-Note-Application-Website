import className from 'classnames/bind';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretLeft, faCaretRight,faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
const cx = className.bind(styles);
function CreateTask(){
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit"/>
      </form>
    )
}
export default Header;