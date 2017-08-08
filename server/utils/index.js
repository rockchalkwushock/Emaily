export const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be logged in!' })
  }
  next()
}

export const requireCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    // 402: 'Payment Required' not in spec yet.
    return res.status(403).send({ error: 'Not enough credits!' })
  }
  next()
}

export const transformRecipients = arr => arr.split(',').map(email => ({ email: email.trim() }))
