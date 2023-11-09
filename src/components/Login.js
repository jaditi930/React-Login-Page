import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Login()
{
  const username="aditi";
  const password="aditi123";
  const navigate=useNavigate();

  const [loginUser,updateUsername]=useState("")
  const [loginPassword,updatePassword]=useState("")
  const [userbox,setuserbox]=useState("")
  const [pbox,setpbox]=useState("")

  
    return (
      <>
      <div style={{minWidth:"100%",minHeight:"100vh"}}>

      <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white" style={{position:"relative",top:"50%",left:"50%",transform:"translate(-50%,30%)"}}>
    <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#7747ff]">App</span></div>
    <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
<form class="flex flex-col gap-3">
    <div class="block relative"> 
    <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Username</label>
    <input type="text" id="username" 
    class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
    style={{borderColor:userbox}}
    onChange={(e)=>{
      let newuser=e.target.value;
      updateUsername(newuser);
    }}
    />
    
    </div>
    <div class="block relative"> 
    <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
    <input type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
     style={{borderColor:pbox}}
     onChange={(e)=>{
      let newpassword=e.target.value;
      updatePassword(newpassword);
    }}
    />
    
    </div>
    <div>
    <a class="text-sm text-[#7747ff]" href="#">Forgot your password?
    </a></div>
    <button class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
    onClick={(e)=>{
      e.preventDefault();
      console.log(loginUser,loginPassword);
      if(loginPassword===password && loginUser===username){
        navigate("success")
      }
      else {
      if(loginUser!==username){
        // document.getElementById("username").classList.add("red");
        setuserbox("red")
      }
      if(loginPassword!==password){
        // document.getElementById("password").classList.add("red");
        setpbox("red")
      }
    }
    }}
    >
      Submit</button>

</form>
<div class="text-sm text-center mt-[1.6rem]">Don't have an account yet? <a class="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
</div>
      </div>
      </>
    )

}