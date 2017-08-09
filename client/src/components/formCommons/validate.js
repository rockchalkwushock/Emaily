import formFields from './formFields'
import validateEmails from '../../utils'

export default values => {
  const errors = {}
  errors.recipients = validateEmails(values.recipients || '')
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value!'
    }
  })
  return errors
}
