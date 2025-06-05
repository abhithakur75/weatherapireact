export const is={name:"",email:"",url:"",isLogged:false};
export const reducer=(state,action)=>{
    switch(action.type)
    {
        case "update" : return action.payload;
        case "reset" : return is;
        default : return state;
    }
}