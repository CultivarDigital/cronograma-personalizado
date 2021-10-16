import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

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
import {
  enableIndexedDbPersistence,
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'

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
  // eslint-disable-next-line no-console
  console.log('INITIALIZE FIREBASE', firebaseConfig.authDomain)
  const firebase = initializeApp(firebaseConfig)
  getAnalytics(firebase)

  const db = getFirestore()

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

  enableIndexedDbPersistence(db)

  const prepare = (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  }

  const runQuery = async (
    collectionName,
    queryConstraints,
    queryOrder,
    queryLimit
  ) => {
    const constraints = []

    if (queryConstraints) {
      queryConstraints.forEach((constraint) => {
        constraints.push(where(...constraint))
      })
    }
    if (queryOrder) constraints.push(orderBy(queryOrder))
    if (queryLimit) constraints.push(limit(queryLimit))
    const q = query(collection(db, collectionName), ...constraints)

    const querySnapshot = await getDocs(query(q))
    const items = querySnapshot.docs.map((doc) => prepare(doc))
    return items
  }

  const getList = async (collectionName) => {
    const itemsCol = collection(db, collectionName)
    const itemsSnapshot = await getDocs(itemsCol)
    const items = itemsSnapshot.docs.map((doc) => prepare(doc))
    return items
  }

  const get = async (collectionName, docId) => {
    const docRef = doc(db, collectionName, docId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return prepare(docSnap)
    } else {
      return null
    }
  }

  const add = async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data)
    return get(collectionName, docRef.id)
  }

  const addToSubcollection = async (
    collectionName,
    docId,
    subcollectionName,
    data
  ) => {
    const docRef = await addDoc(
      collection(db, collectionName, docId, subcollectionName),
      data
    )
    return get(collectionName, docRef.id)
  }

  const set = async (collectionName, docId, data) => {
    await setDoc(doc(db, collectionName, docId), data)
    return get(collectionName, docId)
  }

  const remove = (collectionName, docId) => {
    return deleteDoc(doc(db, collectionName, docId))
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
      dynamicLinkDomain: 'cultivarbrasil.page.link',
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

  inject('firebase', {
    db,
    getList,
    runQuery,
    get,
    add,
    addToSubcollection,
    set,
    remove,
    register,
    login,
    loginWithGoogle,
    generateLoginWithEmail,
    validateLoginWithEmail,
    resetPassword,
    setPassword,
    logout,
    getUser,
  })
}
