import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/Routes';
import SignOut from '../Components/Login/SignOut';

const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN} />

        <Link to={ROUTES.SIGN_UP} />

        <Link to={ROUTES.PROFILE} />

        <Link to={ROUTES.HOME} />

        <Link to={ROUTES.PATH} />

        <Link to={ROUTES.ADD} />
        <Link to={ROUTES.DETAILS} />

        <Link to={ROUTES.FUEL} />

        <Link to={ROUTES.CRASHANALYTIC} />

        <Link to={ROUTES.ABOUT} />

        <SignOut />



    </div>
);

export default Navigation;