import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind';
import styles from "./Toolbar.module.scss";
import {Wrapper as PopperWrapper} from '~/components/Popper';
function Toolbar({children,title=""}) {
    const cx = className.bind(styles);
    return (
        <Tippy
            //visible = {state === true}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <span className={cx('content-title')}>{title}</span>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Toolbar;