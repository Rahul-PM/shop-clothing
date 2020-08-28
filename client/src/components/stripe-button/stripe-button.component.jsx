import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HJwOSKzMXbIsuGOd8p1KfeBANFjpHQkVCGy3xJ8jZC28ZOFNilMQ2IC3AJyaZgFfxZqrTyFfxwZCbfoINdtFqG900Tf0JxPml';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment Successful');
            })
            .catch(error => {
                console.log('payment error: ', JSON.parse(error));
                alert(' There was an issue with your payment. Please make sure you use the provided credit card');
            });
    };
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