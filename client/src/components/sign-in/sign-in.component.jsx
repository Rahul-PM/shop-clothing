import React, { useState } from 'react';
import './sign-in.styles.scss';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }
    const handleSubmit = event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    required
                    onChange={handleChange} />

                <FormInput
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    required
                    onChange={handleChange} />

                <div className="buttons">
                    <CustomButton type="submit" >sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >
                        sign in with google
                        </CustomButton>
                </div>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});
export default connect(null,
    mapDispatchToProps)
    (SignIn);