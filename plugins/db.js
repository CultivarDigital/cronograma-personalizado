import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'

export default ({ app, store }, inject) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  }
  // messaging public key
  const vapidKey = process.env.FIREBASE_MESSAGING_VAPID_KEY

  // eslint-disable-next-line no-console
  console.log('INITIALIZE FIREBASE', firebaseConfig.authDomain)
  const firebase = initializeApp(firebaseConfig)
  if (process.client) {
    getAnalytics(firebase)
  }

  const messaging = getMessaging(firebase)

  let firebaseAuth = null

  const auth = () => {
    if (!firebaseAuth) {
      firebaseAuth = getAuth()
      firebaseAuth.languageCode = 'pt-BR'
    }
    return firebaseAuth
  }

  const getUser = () => {
    return auth().currentUser
  }

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth(), email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth(), email, password)
  }

  const loginWithPopup = (provider) => {
    return signInWithPopup(auth(), provider)
  }
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    return loginWithPopup(provider)
  }

  const generateLoginWithEmail = (email) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: process.env.BASE_URL + '?email_login=true',
      // This must be true.
      handleCodeInApp: true,
      android: {
        packageName: 'com.ionicframework.plantai563575',
        installApp: true,
        minimumVersion: '12',
      },
      dynamicLinkDomain: 'prijorge.page.link',
    }

    return sendSignInLinkToEmail(auth(), email, actionCodeSettings).then(() => {
      app.$localForage.setItem('emailForSignIn', email)
    })
  }

  const validateLoginWithEmail = async (href) => {
    if (isSignInWithEmailLink(auth(), href)) {
      let email = await app.$localForage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Informe seu email para continuar')
      }
      return signInWithEmailLink(auth(), email, href).then(() => {
        app.$localForage.setItem('emailForSignIn', null)
      })
    }
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth(), email)
  }

  const setPassword = (user, email, currentPassword, newPassword) => {
    const credentials = EmailAuthProvider.credential(email, currentPassword)

    return reauthenticateWithCredential(user, credentials).then(() => {
      return updatePassword(user, newPassword)
    })
  }

  const logout = () => {
    return signOut(auth()).then(() => {
      firebaseAuth = null
    })
  }

  const getMessagingToken = () => {
    return getToken(messaging, {
      vapidKey,
    })
      .then((currentToken) => {
        console.log('messaging token: ', currentToken)
        return currentToken
      })
      .catch((err) => {
        console.log('deu erro', err)
        return null
      })
  }

  inject('firebase', {
    register,
    login,
    loginWithGoogle,
    generateLoginWithEmail,
    validateLoginWithEmail,
    resetPassword,
    setPassword,
    logout,
    getUser,
    getMessagingToken,
  })
}
