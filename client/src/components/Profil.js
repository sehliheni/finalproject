
import React from 'react';
import { logout,userCurrent } from '../JS/userSlice/userSlice';
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  useNavigate,Link } from "react-router-dom";

const Profil = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <div className='home-header'>
    <h1 className="logo">School</h1>
    <div className='image5'>
    <Link to = "/home">
    <img className='profil' src='https://cdn.iconscout.com/icon/free/png-256/free-profile-1481935-1254808.png'/>
    </Link>   
    </div>
    <ul class="dropdown">
  <li>
    <img class='setting' src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png'/>
    <ul class='dropdown-content'>
      <li><Link to ="/home/setting">
        Setting
        </Link></li>
      <li> 
        {isAuth ? (
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </button>
      ) : null}</li>
    </ul>
  </li>
</ul>
    </div>
    <div className='profilbody'>
      <div className='cercle'>
          <img className='done' src='https://ottawa-worldskills.org/wp-content/uploads/2022/06/user.png'/>
      </div>
    <h1>name: {user ? user.name :<h1></h1>}</h1>
    <h1>lastname: {user ? user.lastname :<h1></h1>}</h1>
    <h1>email: {user ? user.email :<h1></h1>}</h1>
    </div>
    </div>
  );
};

export default Profil;
