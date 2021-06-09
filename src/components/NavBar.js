import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './NavBar.css';



const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {

    function clickHandler(){
        console.log("Login/Register Clicked");
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
   };

    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar} className="navbar">   
                {/* <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/>  */}
                <Link to="/App" className="navbar-logo">
                    DRESSIFY <i className="fab fa-type3" />
                </Link>
                {/* <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography> */}
                <div className="menu-icon">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  <MenuIcon/>
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
> <Link to="/" className="nav-links">
  <MenuItem onClick={handleClose}>Home</MenuItem>
  </Link>
  <Link to="/" className="nav-links">
  <MenuItem onClick={handleClose}>New Order</MenuItem>
  </Link> <Link to="/" className="nav-links">
  <MenuItem onClick={handleClose}>My Orders</MenuItem>
  </Link>
  <Link to="/login" className="nav-links">
  <MenuItem onClick={handleClose}>Login/Register</MenuItem>
  </Link>
  </Menu>
  </div>
            </Toolbar>
    )
}

export default NavBar

