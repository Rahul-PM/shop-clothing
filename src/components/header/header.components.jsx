import React from 'react';

import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';

import {
    HeaderConrainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderConrainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {currentUser ?
                <OptionDiv onClick={() => auth.signOut()}> SIGN OUT</OptionDiv>
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

export default connect(mapStateToProps)(Header);