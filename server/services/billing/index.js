/* eslint-disable no-param-reassign */
import env from '../../config/environment'

const stripe = require('stripe')(env.STRIPE_SECRET)

const billingOpts = {
  amount: '500',
  currency: 'usd',
  description: '$5 for 5 credits'
}

export const createCharge = async ({ body, user }) => {
  try {
    // @see https://stripe.com/docs/api/node#charge_object
    await stripe.charges.create({ ...billingOpts, source: body.id })
    // Add 5 credits to user's account in database.
    user.credits += 5
    // Save the changes to the user.
    const usr = await user.save()
    return usr
  } catch (e) {
    throw e
  }
}
