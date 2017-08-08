/* eslint-disable no-param-reassign */
import { Survey } from '../../models'
import { transformRecipients } from '../../utils'
import { Mailer, surveyTemplate } from '../mail-client'

export const createSurvey = async ({ body, user }) => {
  const { _body, recipients, subject, title } = body
  const survey = new Survey({
    _user: user.id,
    body: _body,
    dateSent: Date.now(),
    recipients: transformRecipients(recipients),
    subject,
    title
  })
  console.log('Survey Instance', survey)
  const mailer = new Mailer(survey, surveyTemplate(survey))
  console.log('Mailer Instance', mailer)
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
