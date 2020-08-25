import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HJwOSKzMXbIsuGOd8p1KfeBANFjpHQkVCGy3xJ8jZC28ZOFNilMQ2IC3AJyaZgFfxZqrTyFfxwZCbfoINdtFqG900Tf0JxPml';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='SHOP Clothing Ltd.'
            billingAddress
            shippingAddres
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;