import https from 'https'

export default function ({ $axios, $notifier, $auth, app }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.onError($notifier.apiError)
}
