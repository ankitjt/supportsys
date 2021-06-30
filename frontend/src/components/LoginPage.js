import React from 'react';
import login_page_icon from '../assets/login_page_icon2.svg';
import { Link } from 'react-router-dom';
import { loginPageStyles } from './LoginPageStyle.js';
import { Grid } from '@material-ui/core';

const LoginPage = () => {
    const classes = loginPageStyles();
    return (
        <Grid container direction='column' justify='center' alignItems='center' className={classes.gridContainer}>
            <Grid item>
                <img src={login_page_icon} alt='Login Page Icon' className={classes.loginLogo} />
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction='column'
                    justify='center'
                    alignItems='center'
                    className={classes.loginPageLinks}>
                    <Link to='/member/'>Member</Link>
                    <Link to='/admin'>Administrator</Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
