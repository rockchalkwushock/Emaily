import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import formFields from './formFields'
import { submitSurvey } from '../../services'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label htmlFor={label}>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

export default connect(
  ({ form }) => ({
    formValues: form.surveyForm.values
  }),
  { submitSurvey }
)(withRouter(SurveyFormReview))
