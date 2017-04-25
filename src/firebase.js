import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBKefvHONqyRd-W3GHijBKXv6N53U7E7lI",
    authDomain: "chattest-999a3.firebaseapp.com",
    databaseURL: "https://chattest-999a3.firebaseio.com",
    projectId: "chattest-999a3",
    storageBucket: "chattest-999a3.appspot.com",
    messagingSenderId: "521512333543"
 };

export const firebaseApp=firebase.initializeApp(config);
export const firebaseMessages = firebase.database().ref('messages/');