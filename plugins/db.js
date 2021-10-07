import { initializeApp } from 'firebase/app'

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'
import {
  getFirestore,
  // enableIndexedDbPersistence,
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

import { getStorage } from 'firebase/storage'

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
  const db = getFirestore()

  let firebaseAuth = null

  const auth = () => {
    if (!firebaseAuth) {
      firebaseAuth = getAuth()
      firebaseAuth.languageCode = 'pt-BR'
      onAuthStateChanged(firebaseAuth, (user) => {
        store.dispatch('setUser', { authUser: user })
      })
    }
    return firebaseAuth
  }

  const getUser = () => {
    return auth().currentUser
  }

  // enableIndexedDbPersistence(db).catch(firebaseError)

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
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return items
  }

  const getList = async (collectionName) => {
    const itemsCol = collection(db, collectionName)
    const itemsSnapshot = await getDocs(itemsCol)
    const items = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return items
  }

  const get = async (collectionName, docId) => {
    const docRef = doc(db, collectionName, docId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    } else {
      return null
    }
  }

  const add = async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data)
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

  const setProfile = (user, data) => {
    return updateProfile(user, {
      displayName: data.displayName,
      photoURL: data.photoURL,
    }).then(() => {
      return set('users', user.uid, data).then(() => {
        store.dispatch('setUser', { authUser: user })
      })
    })
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

  inject('db', {
    firebase,
    getList,
    runQuery,
    get,
    add,
    set,
    remove,
    register,
    login,
    loginWithGoogle,
    generateLoginWithEmail,
    validateLoginWithEmail,
    resetPassword,
    setPassword,
    setProfile,
    logout,
    getUser,
    getStorage,
  })
}
