import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase/Index';
import * as ROUTES from '../../Constants/Routes';

import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);
const paper = {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const avatar = {
    margin: 1,
    backgroundColor: 'red',
}

const form = {
    width: '100%',
    marginTop: 10,
}

const submit = {
    marginTop: 20,
    backgroundColor: "lightblue",
    color: "black"
}

const INITIAL_STATE = {
    fistname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        //console.log(email);
        const { email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const {
            firstname,
            lastname,
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            firstname === '' ||
            lastname === '' ||
            password === '' ||
            email === '';

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={paper}>
                    <Avatar style={avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
                        Sign up
                    </Typography>
                    <form onSubmit={this.onSubmit} style={form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstname"
                                    value={firstname}
                                    onChange={this.onChange}
                                    type="text"
                                    autoComplete="firstname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoFocus
                                    placeholder="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastname"
                                    value={lastname}
                                    onChange={this.onChange}
                                    type="text"
                                    autoComplete="lastname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoFocus
                                    placeholder="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    value={email}
                                    onChange={this.onChange}
                                    type="text"
                                    placeholder="Email Address"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    type="password"
                                    placeholder="Password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>

                        <Button
                            disabled={isInvalid}
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={submit}
                        >
                            Sign Up
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to={ROUTES.LOGIN} variant="body2">
                                    <div style={{ marginTop: 20 }}>
                                        Already have an account? Sign in
                                    </div>

                                </Link>
                            </Grid>
                        </Grid>

                        {error && <p>{error.message}</p>
                        }


                    </form >
                </div>
            </Container >
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm };