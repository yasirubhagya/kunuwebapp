import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase/Context';
import { withRouter } from 'react-router-dom';

import * as ROUTES from '../../Constants/Routes';

const SignOutButton = (props) => (
        
        <Button  onClick={()=>{props.firebase.doSignOut();props.history.push(ROUTES.LOGIN)}}>
            Logout
        </Button>
    
);

export default withRouter(withFirebase(SignOutButton));