import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import className from 'classnames/bind';

import SubProject from './SubProject';
import CustomInput from '~/components/input';
import ProjectData from '../../../../const/ProjectData';
import styles from './Sidebar.module.scss'

const cx = className.bind(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 2 }}>
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={cx('scroll-project')}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{fontSize : 15 ,  fontWeight : 600 , color : '#fff' , width : '50%'}} label="PROJECT" {...a11yProps(0)} />
            <Tab sx={{fontSize : 15 ,  fontWeight : 600 , color : '#fff' , width : '50%'}} label="CHAT" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
              <div className={cx('search-project')}>
                  <CustomInput/>
              </div>
              <div className={cx('project')}>
                  <ul className={cx('project-ul')}>
                      <li className={cx('project-li')}>
                          {
                              ProjectData.map((item, index) => {
                                  return <SubProject item={item} key={index}></SubProject>
                              })
                          }
                      </li>
                  </ul>
              </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
              Message
        </TabPanel>
      </Box>
    </div>
  );
}
