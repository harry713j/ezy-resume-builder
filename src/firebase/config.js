import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import environment from "../environment-config/environmentConfig";

const firebaseConfig = {
  apiKey: environment.firebaseApiKey,
  authDomain: environment.firebaseAuthDomain,
  projectId: environment.firebaseProjectId,
  storageBucket: environment.firebaseStorageBucket,
  messagingSenderId: environment.firebaseMessagingSenderId,
  appId: environment.firebaseAppId,
  measurementId: environment.firebaseMeasurementId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
