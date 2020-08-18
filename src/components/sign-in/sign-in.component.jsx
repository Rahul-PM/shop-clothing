import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ password: '', email: '' })

    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange} />

                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange} />

                    <div className="buttons">
                        <CustomButton type="submit" >sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            sign in with google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;