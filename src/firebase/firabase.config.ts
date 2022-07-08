import { FirebaseOptions, initializeApp } from "firebase/app";

const dotEnv = process.env;

const firebaseConfig: FirebaseOptions = {
  apiKey: dotEnv.REACT_APP_API_KEY,
  authDomain: dotEnv.REACT_APP_AUTH_DOMAIN,
  databaseURL: dotEnv.REACT_APP_DATABASE_URL,
  projectId: dotEnv.REACT_APP_PROJECT_ID,
  storageBucket: dotEnv.REACT_APP_STORAGE_BCKT,
  messagingSenderId: dotEnv.REACT_APP_MESSAGING_SENDER_ID,
  appId: dotEnv.REACT_APP_APP_ID,
  measurementId: dotEnv.REACT_APP_MEASUREMENT_ID
};

export const firebaseApp = initializeApp(firebaseConfig);
