import className from "classnames/bind";
import styles from "./AssignedTome.module.scss"
function AssignedToMe(){
    const cx = className.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <h1>AssignedToMe</h1>
        </div>
    )
}
export default AssignedToMe;