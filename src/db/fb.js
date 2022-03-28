import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../config/config-fb';

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export { registerUser, loginUser }