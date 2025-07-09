import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './configfirebase';

const auth = getAuth(app);
//functionality of login user
const login = ({email,password})=>{
    return signInWithEmailAndPassword(auth,email,password)
}

export {auth,login};