import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './configfirebase';

const auth = getAuth(app);
//functionality of login user
const login = ({email,password})=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const signup =({email,password,name,date})=>{
    return createUserWithEmailAndPassword(auth,email,password,name,date)
}
export {auth,login,signup};