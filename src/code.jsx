/* import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./componants/Home";
import './componants/AuthForm.css'
import { auth,provider } from "./componants/Firebase";
import { signInWithPopup } from "firebase/auth";


const AuthForm = ({ setLogin }) => {
      const [data,setData]=useState({name:'',email:'',password:''})
      const [value,setValue]=useState("")
     const [form, setForm] = useState(true)

     const handleChange=(e)=>{

          setData({...data ,[e.target.name]:e.target.value});
     }

     const handleClick=()=>{
         signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)

         })
     }
     useEffect(()=>{
          setValue(localStorage.getItem('email'))
     })

     const handleSign=(e)=>{
          e.preventDefault();
           setLogin(false);
         console.log(data)
         axios.post("https://66714deee083e62ee43af3a7.mockapi.io/Demo",data)
         .then((response)=>{
         setData(response.data)
           console.log(response.data)
         })
         .catch((error)=>{
          console.log(error)
         })
     }

     return (
          <>

               <div className=" form-container">
                   
                         <div className="auth-form">
                              <div className="form-toggle">
                                   <button className={form ? 'active' : " "} onClick={() => setForm(true)}>sign up </button>
                                   <button className={!form ? 'active' : " "} onClick={() => setForm(false)}> login </button>

                              </div>
                              <span>OR</span>
                              {value? <Home />:
                              <button className="google" onClick={handleClick}> Sign up with Google</button>
                              }
                              {

                                   form ?

                                        <> <div className="form">
                                             <h2>
                                                  Sign Up
                                             </h2>
                                                 <input type="text" placeholder="UserName" value={data.name} name="name" required onChange={handleChange} />

                                                 <input type="email" value={data.email} name="email"  placeholder="Email Address" required onChange={handleChange}/>

                                                 <input type="password" placeholder="Password" value={data.password} name="password" required  onChange={handleChange}/>
                                                

                                                 <button  onClick={handleSign}  type="submit" >Sign Up</button>
                                                 <p>Already have an account.<a href="#" onClick={() => setForm(false)} > &nbsp;Login now</a></p>
                                        </div>


                                        </> :  <> <div className="form">
                                             <h2>
                                              Log In
                                             </h2>
                                                 
                                                 <input type="email" placeholder="Email Address" required />
                                                 <input type="password" placeholder="Password" required />
                                                 <a href="#" className="forgot"> Forgot Password?</a> <br />

                                                 <button onClick={() => setLogin(false)} type="submit"> Log In</button>
                                               
                                        </div>


                                        </>
                                        
                                        
                              }
                         </div>
                    
               </div>
          </>)
}
export default AuthForm; */