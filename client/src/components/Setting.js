import React from "react";
import { logout, userCurrent } from "../JS/userSlice/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Setting = () => {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            dispatch(userCurrent());
        }
    }, []);
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
            <div className="login_bar">
                <h1>update ur infomation</h1>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="nickname" />
                <input type="gmail" placeholder="gmail" />
                <input type="password" placeholder="password" />
                <button className="update">update</button>
            </div>
  
        </div>
    );
};

export default Setting;
