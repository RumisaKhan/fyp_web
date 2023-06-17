const express = require( 'express' );
const keys = require("../config/keys");
const stripe = require('stripe')("sk_test_51NIv6zHySVQyEtS4SAZ8QX5HbaQ9nr8kI5gAD8RBVvTw6LVpXrdgpzJ2rUIVcppcEWZasNcgcxJMfVFYjtZCBslt00SaF3lMCi");
/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

router.post('/api/checkout', async (req, res) => {
    await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'LastShop - React Next',
        source: req.body.token.id
    });
    res.send({})
});

module.exports = router;