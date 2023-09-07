import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind';
import styles from "./Toolbar.module.scss";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import ToolbarItem from './ToolbarItem';
function Toolbar({children,state=false,handleCLick = undefined ,title="",items=[]}) {
    const cx = className.bind(styles);
    const handleClickMenuItem = (item) =>{
        handleCLick(item);
    }
    const showToolbarItem = () => {
        return items.map((item,index) => <ToolbarItem onClick={handleClickMenuItem} key={index} data={item}></ToolbarItem> )
    }
    return (
        <Tippy
            visible = {state === true}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <span className={cx('content-title')}>{title}</span>
                        {showToolbarItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Toolbar;