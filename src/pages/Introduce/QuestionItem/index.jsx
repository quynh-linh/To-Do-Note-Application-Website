import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '../Introduce.module.scss';
import { useEffect, useState } from 'react';
function QuestionItem({ name, des, unbent = false }) {
    const cx = classNames.bind(styles);
    const [openQuestionItem, setOpenQuestionItem] = useState(false);

    // HANDLE CLICK ITEM IN LIST QUESTIONS
    const handleClickItemQuestion = () => {
        setOpenQuestionItem(!openQuestionItem);
    };

    useEffect(() => {
        // IF UNBENT CHANGE THEN SET OPEN QUESTIONS FOR UNBENT
        setOpenQuestionItem(unbent);
    }, [unbent]);
    return (
        <div className={cx('wrapper__Question-content-listQuestion-item')} onClick={() => handleClickItemQuestion()}>
            <div className={cx('wrapper__Question-content-listQuestion-item-title')}>
                <div>
                    <FontAwesomeIcon
                        icon={openQuestionItem ? faChevronDown : faChevronRight}
                        className={cx('wrapper__Question-content-listQuestion-item-title-icon')}
                    />
                </div>
                <span>{name}</span>
            </div>
            {openQuestionItem ? <div className={cx('wrapper__Question-content-listQuestion-item-des')}>{des}</div> : ''}
        </div>
    );
}

export default QuestionItem;
