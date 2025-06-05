import {MyContext} from './main';
import {useState,useContext,useEffect } from 'react';
import axios from 'axios';
const Home=()=>{
    const{state}=useContext(MyContext);
    const[city,setCity]=useState("");
    
    useEffect(()=>{
        if(state.email!="")
        {
            axios.get('https://66c4bb1bb026f3cc6cf07de0.mockapi.io/records?email='+state.email)
            .then(response => {
                console.log(response);   
                for(let row of response.data)
                {
                    console.log("city : ",row.city);
                }         
            })
            .catch(error => {
                console.log(error);
            });
        }
        else 
        {
            console.log("Please login first");
        }
    },[state.email]);
    const handleAdd=()=>{
            //console.log(state.email);
            //console.log(city);
            //console.log("-------------------");
            axios.post('https://66c4bb1bb026f3cc6cf07de0.mockapi.io/records', {
                email: state.email,
                city: city
              })
              .then(response => {
                console.log(response);
                console.log("data has been saved");
              })
              .catch(error => {
                console.log(error);
              });
    }
    //console.log("before return from Home : ",state);
    return(
        <>
            <h2>Home</h2>
            {
                state.isLogged?
                <>
                    Enter city : 
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} /> 
                    <input type="button" value="add" onClick={handleAdd} />
                </>
                :
                <>
                    <h3>ACCESS DENIED</h3>
                    <p>
                        Please login to explore further 
                    </p>
                </>
            }
        </>
    );
}
export default Home;