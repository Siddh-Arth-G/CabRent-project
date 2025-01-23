import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, userData);

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex flex-col justify-between h-screen p-7">
      <div>
        <img className="w-[180px] mb-5 ml-14" src="./Cab-Rent.svg"></img>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="mb-2 text-lg font-medium">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="w-full px-4 py-2 text-lg bg-[#eeeeee] border mb-7 rounded placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-full px-4 py-2 text-lg bg-[#eeeeee] border mb-7 rounded placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="w-full px-4 py-2 text-lg bg-[#111] text-white font-semibold mb-3 rounded placeholder:text-base">
            Login
          </button>
        </form>
        <p className="mb-3 text-center">
          New Here? <Link to='/signup' className="text-blue-600">Create new Account</Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="flex items-center justify-center w-full px-4 py-2 text-lg bg-[#10b461] text-white font-semibold mb-5 rounded placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
