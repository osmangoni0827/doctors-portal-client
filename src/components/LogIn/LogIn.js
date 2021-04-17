import React, { useContext } from 'react';
import './LogIn.css'
import { useForm } from 'react-hook-form';
import image from  '../../images/Group 140.png';
import { loggedInContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}
else
{
    firebase.app();
}
const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[loggedInUser,setLoggedInUser]=useContext(loggedInContext);
    console.log(loggedInUser);
    const  history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // const [user,setuser]=useState({
    //     email:'',
    //     password:'',
    //     name:'',
    //     error:'',
    //     success:''
    // })
    const onSubmit = data => {
        setLoggedInUser(data);
        SignInWithEmailPassword(data.email,data.password)
        console.log(loggedInUser)
    };

    const SignInWithEmailPassword=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
   const Newuser={
       name:userCredential.user.displayName,
       email:userCredential.user.email,
       errors:''
   };
   setLoggedInUser(Newuser);
   history.replace(from);
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    const Newuser={
        error:errorMessage,
        success:''
    }
    setLoggedInUser(Newuser);
  });
}

const HandleSigInWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const Newuser={
        name:result.user.displayName,
        email:result.user.email,
        errors:''
    };
    setLoggedInUser(Newuser);
    history.replace(from);
    // ...
  }).catch((error) => {
    const errorMessage = error.message;
    const Newuser={
        error:errorMessage,
        success:''
    }
    setLoggedInUser(Newuser);
   
    // ...
  });
}

    return (

        <main className='row'>
            <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                <div className='loginStyle shadow text-center'>
                    <h5>Log In</h5>
                    <form className='mt-5 mb-2' onSubmit={handleSubmit(onSubmit)}>
            
                        <input className='form-control' type='email' name='email' placeholder='Email'{...register("email", { required: true })}/>
                        <p> {errors?.email && <span>This field is required</span>}</p>
                        
                        <input className='form-control' type='password' name='password' placeholder='Password' {...register("password", { required: true })} />
                        <p> {errors?.password && <span>This field is required</span>}</p>
                        <button type='submit' className='mb-2 btn btn-primary'>Login</button>
                        <p>Have not your Account? please <Link to='/signup'>Sign Up</Link></p>
                    </form>

                    <h6>Or</h6>
                    <div>
                    <button type='submit' onClick={HandleSigInWithGoogle} className='mb-3 btn btn-secondary'>Sign In With Google</button>
                    </div>
                    {
                            loggedInUser.error&&<p className='text-warning'>{loggedInUser.error}</p>
                    }
                    {
                        loggedInUser.success&&<p style={{color:'green'}}>Login Successfully</p>
                    }
                </div>
            </div>
            <div className='col-md-6 col-12 loginImage'>
                <img src={image} alt=''></img>
            </div>
        </main>
    );
};

export default LogIn;