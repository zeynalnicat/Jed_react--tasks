import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const url = "https://api.github.com/users/Ali-GreenHeart/followers"

const reducer = (state , action ) =>{
  if(action.type==='getUsers'){
    return action.payload
  }else{
    throw new Error("Undefined type name!")
  }
}
function UsersWithReducer(){
   const [state,dispatch] = useReducer(reducer , [])
   
    useEffect(()=>{
       axios.get(url).then(({data})=>{
        console.log(data)
        dispatch({type : "getUsers" , payload : data})
       })
    },[])

   return <div>

      {
        state.map((user)=>{
          return <div key={user.id} style={{border:"1px solid #ccc", width:500,margin:30}}>
            <img src={user.avatar_url} style={{width:"100%"}}/>
            <h1 style={{textAlign:"center"}}>{user.login}</h1>
            
            </div>     
             })
            }
            </div>
}


export default UsersWithReducer