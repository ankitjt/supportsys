import React, { useState } from 'react';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Avatar,
} from '@material-ui/core';
import { MemberSideBar } from './NavbarData';
import { navbarStyles } from '../Navbar/NavbarStyles';
import avatar from '../../../assets/avatar.jpeg';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const classes = navbarStyles();
  const [open, setOpen] = useState(true);
  return (
    <>
      <Drawer variant='permanent' anchor='left' className={classes.drawer}>
        <div className={classes.profile}>
          <Avatar src={avatar} className={classes.avatar} />

          <Typography variant='subtitle2'>Member Name</Typography>
        </div>

        <Divider variant='middle' />

        <List className={classes.list} component='nav'>
          {MemberSideBar.map((data, index) => (
            <>
              <ListItem button className={classes.listItems} key={data.index}>
                <ListItemIcon className={classes.icons}>{data.icon}</ListItemIcon>

                <ListItem component={RouterLink} to={data.path} className={classes.links}>
                  <ListItemText primary={data.title} />
                </ListItem>
              </ListItem>
              <>
                {data.subMenu &&
                  data.subMenu.map((subMenu, index2) => {
                    return (
                      <Collapse in={open} timeout='auto'>
                        <List component='div'>
                          <ListItem button className={classes.nested} key={subMenu.subIndex}>
                            <ListItemIcon className={classes.icons}>{subMenu.icon}</ListItemIcon>
                            <ListItem component={RouterLink} to={subMenu.path} className={classes.links}>
                              <ListItemText primary={subMenu.title} />
                            </ListItem>
                          </ListItem>
                        </List>
                      </Collapse>
                    );
                  })}
              </>
            </>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
