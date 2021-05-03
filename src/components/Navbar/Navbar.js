import React from 'react';
import './Navbar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const Navbar = () => { 
    return (
        <nav className="navbar navbar-custom navbar-mainbg">
            <div className="Title">
            <h1>Covid-19-Tracker</h1>
            </div>
            <div className="Button-link">
            <Tooltip disableFocusListener disableTouchListener title="Add">
            <Button
                variant="contained"
                color="primary"
                endIcon={<GitHubIcon></GitHubIcon>}
                href="https://github.com/patrick022/Covid-19-Tracker"
            >
                Github Repo
            </Button>
            </Tooltip>
        </div>
        </nav>  
    )
}

export default Navbar;
