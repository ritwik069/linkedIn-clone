import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css'
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/usersSlice';
import Login from './Login';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is loged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        // user is logged out
        dispatch(logout());
      }
    })

  }, [])
  return (
    <div className="app">
      <Header />
      {!user ?
        (
          <Login />
        ) : (

          <div className="app_body">

            <Sidebar />

            <Feed />
            {/* widgets */}
          </div>

        )

      }


    </div>
  );
}

export default App;
