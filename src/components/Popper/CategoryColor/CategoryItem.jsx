import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from 'classnames/bind';
import styles from "./Category.module.scss"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function CategoryItem({data,checked=undefined, onClick=undefined,state={
    title:'',
    state:true
}}) {
    const cx = className.bind(styles);
    // THERE ARE 3 CATEGORY ITEMS ACCORDING TO EACH LEVEL
    const [isClickCategoryItemRed,setCLickCategoryItemRed] = useState(false);
    const [isClickCategoryItemOrange,setClickCategoryItemOrange] = useState(false);
    const [isClickCategoryItemGreen,setClickCategoryItemGreen] = useState(false);

    // HANDLE CLICK CATEGORY ITEM RED
    const handleClickBoxRed = () =>{
        if(isClickCategoryItemRed){
            setCLickCategoryItemRed(!isClickCategoryItemRed);
        }
        state.state = true;
        onClick({
            title:data.title,
            state:!isClickCategoryItemRed
        });

    }

    // HANDLE CLICK CATEGORY ITEM ORANGE
    const handleClickBoxOrange = () =>{
        if(isClickCategoryItemOrange){
            setClickCategoryItemOrange(!isClickCategoryItemOrange);
        }
        state.state = true;
        onClick({
            title:data.title,
            state:!isClickCategoryItemOrange
        });
    }

    // HANDLE CLICK CATEGORY ITEM GREEN
    const handleClickBoxGreen = () =>{
        if(isClickCategoryItemGreen){
            setClickCategoryItemGreen(!isClickCategoryItemGreen);
        }
        state.state = true;
        onClick({
            title:data.title,
            state:!isClickCategoryItemGreen
        });
    }
    useEffect(() => {
        // HANDLING WHEN THE USER CLICKS BUTTON X IN THE DRAWER WHEN TODO SELECTED
        if(!state.state){
            if(state.title === 'Danh mục đỏ' && isClickCategoryItemRed){
                setCLickCategoryItemRed(!isClickCategoryItemRed);
            } else if (state.title === 'Danh mục cam' && isClickCategoryItemOrange){
                setClickCategoryItemOrange(!isClickCategoryItemOrange); 
            } else if (state.title === 'Danh mục xanh' && isClickCategoryItemGreen){
                setClickCategoryItemGreen(!isClickCategoryItemGreen);
            } else{
                setClickCategoryItemGreen(false);
                setCLickCategoryItemRed(false);
                setClickCategoryItemOrange(false);
            }
        }else {
            if(state.title === 'Danh mục đỏ' && !isClickCategoryItemRed){
                setCLickCategoryItemRed(true);
                setClickCategoryItemOrange(false);
                setClickCategoryItemGreen(false);
            } else if(state.title === 'Danh mục cam' && !isClickCategoryItemOrange){
                setClickCategoryItemOrange(true);
                setCLickCategoryItemRed(false);
                setClickCategoryItemGreen(false);
            } else if(state.title === 'Danh mục xanh' && !isClickCategoryItemGreen){
                setClickCategoryItemGreen(true);
                setCLickCategoryItemRed(false);
                setClickCategoryItemOrange(false);
            }
        }
        //CATEGORY ITEM HANDLER FUNCTION IS BEING CHECKED
        if(checked.state){
            if(checked.title === 'Danh mục đỏ'){
                setCLickCategoryItemRed(true);
                setClickCategoryItemOrange(false);
                setClickCategoryItemGreen(false);
            }else if(checked.title === 'Danh mục cam'){
                setClickCategoryItemOrange(true);
                setCLickCategoryItemRed(false);
                setClickCategoryItemGreen(false);
            } else if(checked.title === 'Danh mục xanh'){
                setClickCategoryItemGreen(true);
                setClickCategoryItemOrange(false);
                setCLickCategoryItemRed(false);
            }
        }
        
    },[state.state,state.title,checked.state,checked.title,isClickCategoryItemRed,isClickCategoryItemOrange,isClickCategoryItemGreen]);
    return (
        <div>
            {
                data.title === 'Danh mục đỏ' && (
                    <div className={cx(isClickCategoryItemRed ? 'wrapperCheck':'wrapper')} onClick={handleClickBoxRed}>
                        <div  className={cx('menu-box')}>
                            <div>
                                <FontAwesomeIcon className={cx('menu-box_iconRed')} icon={data.icon}></FontAwesomeIcon>
                                <span className={cx('menu-box_name')}>{data.title}</span>
                            </div>
                            {
                                isClickCategoryItemRed ? (
                                    <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                                ) : ''
                            }
                        </div>
                    </div>
                )
            }
            {
                data.title === 'Danh mục cam' && (
                    <div className={cx(isClickCategoryItemOrange ? 'wrapperCheck':'wrapper')} onClick={handleClickBoxOrange}>
                        <div className={cx('menu-box')}>
                            <div>
                                <FontAwesomeIcon className={cx('menu-box_iconOrange')} icon={data.icon}></FontAwesomeIcon>
                                <span className={cx('menu-box_name')}>{data.title}</span>
                            </div>
                            {
                                isClickCategoryItemOrange && (
                                    <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                                )
                            }
                        </div>
                    </div>
                )
            }
            {
                data.title === 'Danh mục xanh' && (
                    <div className={cx(isClickCategoryItemGreen ? 'wrapperCheck':'wrapper')} onClick={handleClickBoxGreen}>
                        <div className={cx('menu-box')}>
                            <div>
                                <FontAwesomeIcon className={cx('menu-box_iconGreen')} icon={data.icon}></FontAwesomeIcon>
                                <span className={cx('menu-box_name')}>{data.title}</span>
                            </div>
                            {
                                isClickCategoryItemGreen && (
                                    <FontAwesomeIcon className={cx('menu-box_iconCheck')} icon={faCheck}></FontAwesomeIcon>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CategoryItem;