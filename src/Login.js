import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './app/usersSlice';
import { auth } from './Firebase';
import './Login.css'

function Login() {
    const [isregister, setregister] = useState(false);
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [profileurl, setprofile] = useState("");
    const dispatch = useDispatch()
    const regsiter = (e) => {
        e.preventDefault();
        if (!name) {
            return alert('please enter name ')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(
                (userAuth) => {
                    userAuth.user.updateProfile({
                        displayName: name,
                        photoURL: profileurl,
                    })
                        .then(
                            () => {
                                dispatch(login({
                                    email: userAuth.user.email,
                                    uid: userAuth.user.uid,
                                    displayName: name,
                                    photoUrl: profileurl
                                }))
                            }
                        )
                }
            ).catch((error) => alert(error));
                console.log(name);

    }
    const LoginToApp = (e) => {
        console.log(name);
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }))
            })
        setpassword('');
        setemail('');
        setname('');


    }
    return (
        <div className='login'>
            <h1 >
                please login or register

            </h1>
            {
                !isregister ?
                    <>
                        
                        <form>
                           
                            <input type="email" placeholder='enter email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <button type="submit" onClick={LoginToApp}>Signin</button>
                        </form>
                        <p>Not a member?

                            <span onClick={() => { setregister(true); }}>Register now</span>

                        </p>
                    </>
                    :
                    <>
                        <form>
                            <input type="text" placeholder='enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
                            <input type="text" placeholder='picurl' value={profileurl} onChange={(e)=>{setprofile(e.target.value)}} />
                            <input type="email" placeholder='enter email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <button type="submit" onClick={regsiter} >Register</button>
                        </form>

                    </>
            }
        </div>
    )
}

export default Login
