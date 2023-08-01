import {useState , useRef , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled, alpha } from '@mui/material/styles';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import './MenuListComposition.css';
import MyCalendar from '../Calendar/Calendar';
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
}));
function MenuListComposition({data,icon,title}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [valueDay, setValueDay] = useState(null);
    const calendarRef = useRef();
    let open = Boolean(anchorEl);

    const handleClickOutside = (event) => {
      const parentElement = event.target.closest('#my-calendar_open');
      if (parentElement !== calendarRef.current) {
          setOpenCalendar(false);
      }
    };
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleOpenCalendar = () => {
      setOpenCalendar(!openCalendar);
    };

    const handleClickCalendar = (event) => {
      setValueDay(event);
    };


    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
    }, []);
    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-haspopup="true"
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<FontAwesomeIcon icon={icon}></FontAwesomeIcon>}
        >
          
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <span className='MenuListComposition-title'>{title}</span>
          <Divider sx={{ my: 0.5 }} />
          {
            data.map((item) => {
              return (
                <MenuItem key={item.id} onClick={handleClose} disableRipple>
                  <div className='MenuListComposition-listControls'>
                    <span className='MenuListComposition-listControls_icon'>
                      <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                    </span>
                    <span className='MenuListComposition-listControls_title'>{item.title}</span>
                    <span className='MenuListComposition-listControls_days'>{item.day}</span>
                  </div>
                </MenuItem>
              )
            })
          }
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleOpenCalendar} disableRipple>
            <span className='MenuListComposition-listControls_icon'>
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            </span>
            <span className='MenuListComposition-listControls_title'>{valueDay ? valueDay : 'Chọn Ngày'}</span>
          </MenuItem>
        </StyledMenu>
        {
            openCalendar && (
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={openCalendar}
                onClose={handleClose}
              >
                <div ref={calendarRef}>
                  <MyCalendar setValue={handleClickCalendar} id="my-calendar_open"> 
                  </MyCalendar>
                </div>
              </StyledMenu>
            )
          }
      </div>
    );
}
export default MenuListComposition;