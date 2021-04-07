import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';
import firebaseConfig from './firabase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}

export const ghSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL, uid } = result.user;
            const userData = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                uid: uid,
                errMessage: ''
            }
            return userData;
        }).catch((error) => {
            const errData = {
                errMessage: error.message,
            }
            return errData;
        });
}

export const fileUploadHandle = (imgFile, imgDir, obj) => {
    return firebase.storage().ref(imgDir).put(imgFile).then(() => {
        return firebase.storage().ref(imgDir).getDownloadURL().then(imgUrl => {
            const newObj = { ...obj };
            newObj.photo = imgUrl;
            newObj.message = "";
            return newObj;
        }).catch(err => {
            const newObj = { ...obj };
            newObj.message = err.message;
            return newObj;
        })
    }).catch((err) => {
        const newObj = { ...obj };
        newObj.message = err.message;
        return newObj;
    })
}