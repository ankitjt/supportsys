import { makeStyles } from '@material-ui/core';

export const loginPageStyles = makeStyles(theme => ({
    gridContainer: {
        height: '100vh',
    },
    loginLogo: {
        height: 300,
        width: 300,
    },
    loginPageLinks: {
        '& a': {
            textDecoration: 'none',
            margin: '15px 0',
            backgroundColor: '#3f3c56',
            color: '#fff',
            letterSpacing: 1,
            textTransform: 'uppercase',
            fontSize: 12,
            padding: '15px 30px',
            width: 200,
            textAlign: 'center',
            borderRadius: 5,
        },
    },
}));
