importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyB34PcDx1tKEjuRfwsssiMTbfUXRpf4C-4',
  authDomain: 'cronograma-personalizado.firebaseapp.com',
  projectId: 'cronograma-personalizado',
  storageBucket: 'cronograma-personalizado.appspot.com',
  messagingSenderId: '115244050461',
  appId: '1:115244050461:web:4da17da5b854b2c0e7fef4',
  measurementId: 'G-F4GY46F1DZ',
})

const messaging = firebase.messaging()
console.log('messaging', messaging)
