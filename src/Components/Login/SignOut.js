import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase/Context';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../Constants/Routes';

const SignOutButton = ({ firebase }) => (
    <Link to={ROUTES.LOGIN}>
        <Button  onClick={firebase.doSignOut}>
            Logout
        </Button>
    </Link >
);

export default withFirebase(SignOutButton);