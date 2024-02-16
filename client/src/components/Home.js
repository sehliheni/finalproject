import React from 'react';
import { logout, userCurrent } from '../JS/userSlice/userSlice';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
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
      <div className='home-header'>
        <h1 className="logo">School</h1>
        <div className='image5'>
          <Link to="/profil"> <img className='home' src='https://cdn-icons-png.flaticon.com/512/25/25694.png' /></Link>
          <Link to="/home">
            <img className='profil' src='https://cdn.iconscout.com/icon/free/png-256/free-profile-1481935-1254808.png' />
          </Link>
        </div>
        <ul class="dropdown">
          <li>
            <img class='setting' src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png' />
            <ul class='dropdown-content'>
              <li><Link to="/home/setting">
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

      <div className='card'>
        <img className="schoolimg" src='https://media.istockphoto.com/id/1055628686/vector/concept-of-education-school-background-with-hand-drawn-school-supplies-and-comic-speech.jpg?s=612x612&w=0&k=20&c=zBwYTesO_uSsWpxb2U0QsFnjIpeWCBaJHWvntftrFIQ='  ></img>
        <div className='section1'>
          <div className="emploi">
            <img className="temp" src="https://cdn-icons-png.flaticon.com/512/5246/5246277.png" />
            <h1>emploi</h1>
          </div>
          <div className="class">
            <img className="classes" src="https://cdn-icons-png.flaticon.com/512/538/538899.png" />
            <h1>class</h1>
          </div>
          <div className="teacher">
            <img className="tech" src="https://static.thenounproject.com/png/2339926-200.png" />
            <h1>teacher</h1>
          </div>
        </div>
      </div>
      <div className='section3'>
        <div className='historie'>
          <img className='hist' src='https://cdn-icons-png.flaticon.com/512/2234/2234665.png'/>
          <p>
          The history of schools begins in ancient civilizations,
          where education was mainly for the elite. 
          During the Middle Ages, religious institutions dominated education.
          The Renaissance and Enlightenment periods saw a resurgence of learning and the promotion of 
          universal education. 
          The Industrial Revolution led to the establishment of public 
          education systems. 
          In the modern era, schools continue to evolve with a focus on personalized learning
          and adapting to technological advancements.
          </p>
        </div>
        <div className='avt'>
            <img className='actimg'src='https://static.thenounproject.com/png/5447990-200.png'></img>
            <p>
            School activities encompass a range of academic, extracurricular, and social engagements. 
            These include classroom learning, sports, clubs, music, art, field trips, and social events, 
            all aimed at nurturing students' holistic development.
            </p>
        </div>
      </div>
      <div className='section4'>
<p className='p'>
Here is what you can learn by looking at the details of our statistics.
To find out more about the success rate, consult our dedicated factsheets to get an idea of ​​where you will be going.
</p>
      </div>
      <div className="footer">
        <h5>copyright @sehly</h5>
      </div>
    </div>

  );
}

export default Home;
