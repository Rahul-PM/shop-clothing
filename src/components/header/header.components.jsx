import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';

import {
    HeaderConrainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderConrainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {currentUser ?
                <OptionDiv onClick={signOutStart}> SIGN OUT</OptionDiv>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }

            <CartIcon />
        </OptionsContainer>
        {hidden ? null :
            <CartDropDown />
        }
    </HeaderConrainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);