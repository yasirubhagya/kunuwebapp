import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:100}}>
      <div >
          <h3>
              What is Kunu?
          </h3>
          <p>
              Kunu is a crowd sourcing waste managment web interface which guides to clean the irregularly disposed garbage in Sri Lanka
          </p>
          <h3>
              Goal
          </h3>
          <p>
              Our main target is to create proper garbage disposal system in Sri Lanka which directs to protect the environment and for the health and safety of the population.
          </p>
          <h3>
              How it Works?
          </h3>
          <p>
            The user can sign in Kunu app and simply mark where the trash is using the map. The web UI informs the details to the unit who concerns and takes actions for the removal. Further information can be added esily, whether it stinks badly, has a threat of dengue, and what kind of trash it is (Organic glass, Plastic...etc).
            According to the information provided priority will be given for the removal.
          </p>
          <h3>
              Additional Features
          </h3>
          <p>
            The web UI will guide you when finding proper garbage recycling centers near the user.
          </p>
          
      </div>
    </div>
  );
}