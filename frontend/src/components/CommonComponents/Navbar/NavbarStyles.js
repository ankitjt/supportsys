import { makeStyles } from '@material-ui/core';

const drawerWidth = '210px';
export const navbarStyles = makeStyles(theme => ({
  drawer: {
    minWidth: drawerWidth,
    minHeight: '100%',
  },
  profile: {
    background: '#222B36',
    padding: 25,
    color: '#999',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: 15,
  },
  list: {
    width: drawerWidth,
    background: '#222B36',
    height: '100%',
    minHeight: 'auto',
    padding: 10,
  },
  listItems: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  icons: {
    color: '#999',
    minWidth: 'auto',
  },
  links: {
    color: '#999',
    textTransform: 'capitalize',
    '& span': {
      letterSpacing: 1,
      fontSize: 14,
    },
  },
  nested: {
    paddingLeft: theme.spacing(6),
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
  },
}));
