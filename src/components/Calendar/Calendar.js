import React, { useState } from 'react';
import className from 'classnames/bind';
import Calendar from 'react-calendar';

import styles from './Calendar.module.scss'
function MyCalendar({setValue}) {
  const cx = className.bind(styles);
  const [value, onChange] = useState(new Date());
  console.log(value)
  return (
    <div className={cx('wrapper')}>
      <Calendar onClick={onChange} value={value}/>
      <div className={cx('wrapper-btn')}>
        <button type='submit'>Lưu</button>
      </div>
    </div>
  );
}
export default MyCalendar;