import firebase from './componants/Firebase';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { LogInContext } from './App';
import Home from './componants/Home';
import './componants/AuthForm.css';
import './componants/Weather.css';

const AuthForm = () => {
     const { logged, setLogged, userDetails, setUserDetails } = useContext(LogInContext);

     const provider = new GoogleAuthProvider();

     const handleClick = (e) => {
          e.preventDefault();
          const auth = getAuth();
          signInWithPopup(auth, provider)
               .then((result) => {
                    const user = result.user;
                    setLogged(true);
                    setUserDetails({ Name: user.displayName, Email: user.email, Photo: user.photoURL });
                    console.log(user);
                    console.log(user.displayName);
                    console.log(user.email);
                    console.log(user.photoURL);
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // const email = error.customData.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    console.error('Error Code:', errorCode, 'Message:', errorMessage, 'Email:', email, 'Credential:', credential);
               });
     };

     return (
          <div className="form-container">
               <div className="auth-form">
                    {
                         logged ? (
                              <Home />
                         ) : (
                              <div className="login-container">
                                   <div className="row">
                                        <div className="col-6 text-center">
                                             <h2>WELCOME <br /> LOGIN TO SEE LIVE WEATHER UPDATES</h2>
                                             <button className="google" onClick={handleClick}>
                                                  <i className="fa-brands fa-google"></i> Sign up with Google
                                             </button>
                                             <p>
                                                  By clicking Continue to join or sign in, you agree to Openweather’s User Agreement, Privacy Policy, and Cookie Policy.
                                             </p>
                                        </div>
                                        <div className="col-6">
                                             <img src="weather.webp" className='img' alt="weatherapi" />
                                        </div>
                                   </div>
                              </div>
                         )
                    }
               </div>
          </div>
     );
};

export default AuthForm;
