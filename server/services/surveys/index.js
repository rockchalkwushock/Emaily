/* eslint-disable no-param-reassign */
import _ from 'lodash'
import Path from 'path-parser'
import { URL } from 'url'

import { Survey } from '../../models'
import { transformRecipients } from '../../utils'
import { Mailer, surveyTemplate } from '../mail-client'

export const createSurvey = async ({ body, user }) => {
  const { message, recipients, subject, title } = body
  const survey = new Survey({
    _user: user.id,
    message,
    dateSent: Date.now(),
    recipients: transformRecipients(recipients),
    subject,
    title
  })
  const mailer = new Mailer(survey, surveyTemplate(survey))
  try {
    await mailer.send()
    await survey.save()
    user.credits -= 1
    const _user = await user.save()
    return _user
  } catch (e) {
    throw e
  }
}

export const getSurveys = async ({ user }) => {
  try {
    const surveys = await Survey.find({ _user: user.id }).select({
      recipients: false
    })
    return surveys
  } catch (e) {
    throw e
  }
}

export const webhook = (req, res) => {
  const p = new Path('/api/surveys/:surveyId/:choice')
  _.chain(req.body)
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname)
      if (match) {
        return { email, surveyId: match.surveyId, choice: match.choice }
      }
    })
    .compact()
    .uniqBy('email', 'surveyId')
    .each(({ surveyId, email, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }
      ).exec()
    })
    .value()
  res.send({})
}
