const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      description: 'Software development services',
      //For Indian users, providing shipping details is compulsary as per stripe, hence dummy data filled
      shipping: {
        name: 'User',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Fransisco',
          state: 'CA',
          country: 'US',
        },
      },
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
