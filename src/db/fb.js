import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8UivLBwhbKh0qTgNeBM1ccYXU5dvE_D0",
    authDomain: "movies-app-9d9d9.firebaseapp.com",
    projectId: "movies-app-9d9d9",
    storageBucket: "movies-app-9d9d9.appspot.com",
    messagingSenderId: "430204951261",
    appId: "1:430204951261:web:a78f750a16a5de70d7d934"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export { registerUser, loginUser }