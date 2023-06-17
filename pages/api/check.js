const stripe = require('stripe')("sk_test_51NIv6zHySVQyEtS4SAZ8QX5HbaQ9nr8kI5gAD8RBVvTw6LVpXrdgpzJ2rUIVcppcEWZasNcgcxJMfVFYjtZCBslt00SaF3lMCi");


export default function check(req, res) {
    stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'LastShop - React Next',
        source: req.body.token.id
    })
    .the(()=>console.log(res))
    .catch(err => {
        console.log(err)
        res.status(400).send("Message not sent.")
    });
}