/* eslint-disable no-param-reassign */
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
  console.log('Survey Instance', survey)
  const mailer = new Mailer(survey, surveyTemplate(survey))
  try {
    await mailer.send()
    await survey.save()
    user.credits -= 1
    console.log('User', user)
    const _user = await user.save()
    console.log('New User', _user)
    return _user
  } catch (e) {
    throw e
  }
}
