# Emaily Server

## Running in Development

I had issues using `localtunnel` as was used in the tutorial so I used `ngrok`.

```sh
yarn global add ngrok
pwd # /server
ngrok http 5000
# copy the 'https' url & add to the Sendgrid webhook url option under 'click notifications'
```

1. The `ngrok` server must be running as well as the development server.
2. As soon as the `ngrok` server is closed the link generated is destroyed and must be replaced in the Sendgrid console and anywhere else it is being used in the code base.