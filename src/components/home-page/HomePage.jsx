import React, { useState } from 'react';
import "./home-page.css";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const HomePage = () => {
    const navigate = useNavigate();
    const [userName,setUserName] = useState();
    const submitUser = (e) =>{
        e.preventDefault();
        Swal.fire('Checking User Please Wait!');
        Swal.showLoading();
        fetch(`https://api.github.com/users/${userName}`)
        .then(req => {
          if(req.status===200)
          {
            return req.json();
          }
            
        })
        .then(res => {
          if(res!==undefined)
          {
            sessionStorage.setItem("userdata",JSON.stringify(res));
            navigate("/git-user-info");
          }
          else
          Swal.fire(
            'User Not Found!',
            'Check User Name',
            'error'
          )
        });
        //sessionStorage.setItem("username",userName);
        //navigate("/git-user-info");
    }
  return (
    <div className="home_page_container">
        <form onSubmit={submitUser} className="home_page_card">
            <AiFillGithub size={100}/>
            <input type="text" pattern="[^\s]+" onChange={(e)=>setUserName(e.target.value)} placeholder='Username'required/>
            <input className='btn' type="submit"/>
        </form>
    </div>
  )
}

export default HomePage