import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './configfirebase';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);
const db = getFirestore(app);
//functionality of login user
const login = ({email,password})=>{
    return signInWithEmailAndPassword(auth,email,password)   
    
}
//Functionality For Register Nrw User
const signup =()=>{
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const date = useRef();

    const registerUser = async(e)=>{
        e.preventDefault();
        //Check Email And Password
        if (!email.current.value || !password.current.value) {
            console.log("Please Enter Email Password Properly");
            return;
        }
        try{
    //Returing The Input Values 
    const userCredential = await createUserWithEmailAndPassword(auth,
        email.current.value,
        password.current.value,
    );
    const user = userCredential.user;
    console.log("User Create Successfully"+ user);
    
    await setDoc(doc(db,"users",user.uid),{
        name : name.current.value,
        email : email.current.value,
        password : password.current.value,
    });
//Now Navigate To Login Page
useNavigate('/');
console.log("User Data Stored In Firebase Data Base");

        }
        catch(error){
            const errors = error.message;
            console.log("Error Message " + errors );        
        }
    }


}
//Functionality For SignOut
const signout = (e)=>{
  signOut(auth).then(() => {
    confirm("Are You Sure You Want To Logged Out");
}).catch((error) => {
  console.log("Error Message " + error.message);
  
});
}

export {auth,login,signup,signout,db};