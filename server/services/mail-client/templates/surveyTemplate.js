import env from '../../../config/environment'

export default survey => `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.message}</p>
          <div>
            <a href="${env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${env.REDIRECT_DOMAIN}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `
