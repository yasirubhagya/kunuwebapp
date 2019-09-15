import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
//import PasteIcon from '@material-ui/icons/Paste';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './layout.css';

import SignOut from '../Components/Login/SignOut';

import * as ROUTES from '../Constants/Routes';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {

    open: false,
    navList: [
      {
        id: 0, label: "Home", icon: <HomeIcon />, uri: ROUTES.HOME, open: false,
        children: []
      },
      // {
      //   id: 1, label: "Routes", icon: <InboxIcon />, uri: ROUTES.PATH, open: false,
      //   children: []
      // },
      // {
      //   id: 2, label: "Bus", icon: <InboxIcon />, uri: ROUTES.BUS, open: false,
      //   children: [
      //     { id: 0, label: "Add", icon: <InboxIcon />, uri: ROUTES.ADD },
      //     { id: 1, label: "Details", icon: <InboxIcon />, uri: ROUTES.DETAILS },
      //   ]
      // },
      // {
      //   id: 3, label: "Fuel", icon: <InboxIcon />, uri: ROUTES.FUEL, open: false,
      //   children: []
      // },
      // {
      //   id: 4, label: "Crashanalytic", icon: <InboxIcon />, uri: ROUTES.CRASHANALYTIC, open: false,
      //   children: []
      // },
      {
        id: 5, label: "About ", icon: <HomeIcon />, uri: ROUTES.ABOUT, open: false,
        children: []
      }

    ]
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenuOpen = (index) => {
    let newNavList = [...this.state.navList]
    newNavList[index].open = !this.state.navList[index].open;
    this.setState({ navList: newNavList });
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
              Kunu
            </Typography>
            <Link to={ROUTES.PROFILE}>
              <Button>
                Profile
            </Button>
            </Link>

            <SignOut />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.state.navList.map((Item, index) => {
              if (Item.children.length !== 0) {
                return (<React.Fragment key={index}>
                  <ListItem button onClick={() => this.handleMenuOpen(index)} >
                    <ListItemIcon>{Item.icon}</ListItemIcon>
                    <ListItemText inset primary={Item.label} />
                    {Item.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={Item.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {Item.children.map(child => (
                        <NavLink key={child.id} to={child.uri}>
                          <ListItem button className={classes.nested}>
                            <ListItemIcon>
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText inset primary={child.label} />
                          </ListItem>
                        </NavLink>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>)
              } else {
                return (<React.Fragment key={index}>
                  <NavLink to={Item.uri}>
                    <ListItem button>
                      <ListItemIcon>{Item.icon}</ListItemIcon>
                      <ListItemText inset primary={Item.label} />
                    </ListItem>
                  </NavLink>
                </React.Fragment>)
              }
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
