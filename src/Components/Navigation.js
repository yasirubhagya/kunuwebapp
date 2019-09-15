import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/Routes';

const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN} />

        <Link to={ROUTES.SIGN_UP} />

        <Link to={ROUTES.PROFILE} />

        <Link to={ROUTES.HOME} />

        <Link to={ROUTES.ABOUT} />
    </div>
);

export default Navigation;