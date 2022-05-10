// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4guLiOJJs6RtIg_bD0tY1jgLT-5QBplo",

  authDomain: "yuvalimrooms.firebaseapp.com",

  databaseURL: "https://yuvalimrooms-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "yuvalimrooms",

  storageBucket: "yuvalimrooms.appspot.com",

  messagingSenderId: "196267781068",

  appId: "1:196267781068:web:8c1c5d58cb2fcb53bf8b69",

  measurementId: "G-3QYFY0CBM6"

  };







// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)

export const createUser = async (userInfo, isAdmin) => {

  if (!userInfo) return;

  const userDocRef = doc(db, 'users', userInfo.uid);
  const getUserFromDB = await getDoc(userDocRef);

  if (!getUserFromDB.exists()) {
    const { displayName, email } = userInfo;
    const Data = new Date();

    try {

      await setDoc(userDocRef, { displayName, email, Data, isAdmin })

    } catch (error) {

      console.error(error.message);
      
    }
  }
  
}

export const getCollection = async (collectionName) => {

  const collectionRef = collection(db, collectionName);

  const allDocs = await getDocs(collectionRef)

  const a = allDocs.docs.map((doc) => { return { ...doc.data(), id: doc.id } });

  return a;
}

export const creatAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const logInWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () =>
  await signOut(auth);

export const userAuthLisiner = (callback) => {
  if(!callback) return;

  return onAuthStateChanged(auth,callback);

}