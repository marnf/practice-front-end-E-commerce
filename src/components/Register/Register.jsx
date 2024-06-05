import { GoogleAuthProvider, getAuth, signInWithPopup,createUserWithEmailAndPassword  } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.init';



const auth = getAuth(app);
const Register = () => {

    // log in with google

const googleProvider = new GoogleAuthProvider()
const handleGmailProvider = ()=>{
 signInWithPopup (auth,googleProvider )
 .then(result =>{
    const user = result.user;
    console.log(user)
 })
 .catch(error=>{
    console.log(error)
 })
}

const [success, setSuccess] =useState('');
const [error, setError] =useState('');

// log in with email and password




const handleFormSubmit = (event)=>{
 event.preventDefault();

 const email = event.target.email.value;
 const password = event.target.password.value;
 


// firebase work

createUserWithEmailAndPassword(auth, email, password )

.then(result       =>{
    const user = result.user;
    setSuccess(' user has been created successfully');
    setError('');
})
.catch(error =>{
    console.log(error.message)
    setError(error.message);
    setSuccess('');
})
}









    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
              Email
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              submit
            </button>
            <div className="flex flex-col space-y-2">
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        type="submit"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37258 0 0 5.37258 0 12C0 17.3031 3.43889 21.624 8.20508 23.1944C8.80508 23.2944 9.02226 22.8944 9.02226 22.5444C9.02226 22.2444 9.01116 21.584 9.00508 20.7733C5.68047 21.4733 4.9684 19.3147 4.9684 19.3147C4.45129 17.9467 3.70013 17.5333 3.70013 17.5333C2.6354 16.8533 3.76968 16.8688 3.76968 16.8688C4.92389 16.9488 5.50508 18.0533 5.50508 18.0533C6.52866 19.704 8.14613 19.224 8.80508 18.9733C8.90508 18.224 9.22258 17.7488 9.5804 17.4933C6.98226 17.2288 4.25758 16.2031 4.25758 11.556C4.25758 10.2333 4.73047 9.17333 5.50508 8.35333C5.38047 8.07333 5.01013 6.80533 5.6304 5.104C5.6304 5.104 6.6654 4.81467 8.99968 6.37467C9.90508 6.096 10.8654 5.96133 11.8051 5.95333C12.7451 5.96133 13.7051 6.096 14.6104 6.37467C16.9447 4.81467 17.9797 5.104 17.9797 5.104C18.5997 6.80533 18.2294 8.07333 18.1047 8.35333C18.8794 9.17333 19.3523 10.2333 19.3523 11.556C19.3523 16.2192 16.6197 17.2288 14.0151 17.4867C14.4297 17.7747 14.8351 18.432 14.8351 19.3733C14.8351 20.696 14.8197 21.7267 14.8197 22.5267C14.8197 22.8787 15.0347 23.2853 15.6447 23.1833C20.4451 21.6353 24 17.2933 24 12C24 5.37258 18.6274 0 12 0Z"/>
        </svg>
        Log in with GitHub
      </button>
      <button onClick={handleGmailProvider}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        type="button"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M24 9.5c3.44 0 6.16 1.12 8.13 2.94l5.92-5.92C34.57 3.92 29.63 2 24 2 14.86 2 7.17 7.63 3.9 15.36l6.83 5.24C12.71 14.65 17.95 9.5 24 9.5z" />
          <path fill="#34A853" d="M24 44c5.63 0 10.57-1.92 14.03-5.21l-6.49-5.24C28.89 34.82 26.7 35.5 24 35.5c-6.08 0-11.25-4.07-13.09-9.67l-6.8 5.24C7.17 40.37 14.86 44 24 44z" />
          <path fill="#FBBC05" d="M10.91 25.83c-.49-1.42-.76-2.93-.76-4.5s.27-3.08.76-4.5L4.11 11.59C2.77 14.22 2 17.05 2 20c0 2.95.77 5.78 2.11 8.41l6.8-5.24z" />
          <path fill="#EA4335" d="M24 14.5c2.7 0 5.07.93 6.96 2.45l5.49-5.49C33.63 8.62 29.64 7 24 7c-6.05 0-11.29 5.15-12.27 11.92l6.83 5.24C17.75 18.57 20.92 14.5 24 14.5z" />
        </svg>
        Log in with Gmail
      </button>
    </div>
          </div>
          <p className='text-green-700'>{success}</p>
          <p className='text-red-700 '>{error}</p>
        </form>
      </div>
      
    </div>


     
    );
};

export default Register;