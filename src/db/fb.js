import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import config from '../config/config';

const app = initializeApp(config.firebaseConfig);

const auth = getAuth(app);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export { registerUser, loginUser }