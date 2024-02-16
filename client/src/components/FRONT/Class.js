import React from 'react';
import { logout, userCurrent } from "../../JS/userSlice/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getclass}  from '../../JS/classSlice/classSlice';

const Class = () => {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            dispatch(userCurrent());
        }
    }, []);
    useEffect(()=>{
        dispatch(getclass())
    },[])
return (
    <div>
      <div className="home-header">
                <h1 className="logo">School</h1>
                <div className="image5">
                    <Link to="/profil">
                        {" "}
                        <img
                            className="home"
                            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                        />
                    </Link>
                    <Link to="/home">
                        <img
                            className="profil"
                            src="https://cdn.iconscout.com/icon/free/png-256/free-profile-1481935-1254808.png"
                        />
                    </Link>
                </div>
                <ul class="dropdown">
                    <li>
                        <img
                            class="setting"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png"
                        />
                        <ul class="dropdown-content">
                            <li>
                                <Link to="/home/setting">Setting</Link>
                            </li>
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
                                ) : null}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div >

            </div>
    </div>
);
}

export default Class;
