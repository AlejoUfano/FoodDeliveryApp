
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5GprOTpiTNFtxOHcd7vHMOgSHWBxU2YI",
    authDomain: "food-delivery-app-28e0a.firebaseapp.com",
    databaseURL: "https://food-delivery-app-28e0a-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-28e0a",
    storageBucket: "food-delivery-app-28e0a.appspot.com",
    messagingSenderId: "334338740031",
    appId: "1:334338740031:web:8ceb3c9c5d165011cdcd8a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };