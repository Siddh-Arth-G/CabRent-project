// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";
// import axios from "axios";

// const CaptainLogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [captainData, setCaptainData] = useState({});

//   const {captain, setCaptain} = React.useContext(CaptainDataContext);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const captain = {
//       email: email,
//       password,
//     };

//     const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/login`, captain);

//     if(response.status === 200){
//       const data = response.data;
//       setCaptain(data.captain);
//       localStorage.setItem('token', data.token);
//       navigate('/captain-home');
//     }
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="flex flex-col justify-between h-screen p-7">
//       <div>
//         <img className="w-[180px] mb-5 ml-14" src="./Cab-Rent.svg"></img>
//         <form
//           onSubmit={(e) => {
//             submitHandler(e);
//           }}
//         >
//           <h3 className="mb-2 text-lg font-medium">What's your email?</h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             className="w-full px-4 py-2 text-lg bg-[#eeeeee] border mb-7 rounded placeholder:text-base"
//             type="email"
//             placeholder="email@example.com"
//           />
//           <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
//           <input
//             required
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             className="w-full px-4 py-2 text-lg bg-[#eeeeee] border mb-7 rounded placeholder:text-base"
//             type="password"
//             placeholder="password"
//           />
//           <button className="w-full px-4 py-2 text-lg bg-[#111] text-white font-semibold mb-3 rounded placeholder:text-base">
//             Login
//           </button>
//         </form>
//         <p className="mb-3 text-center">
//           Want to Join?{" "}
//           <Link to="/captain-signup" className="text-blue-600">
//             Register as a Captain
//           </Link>
//         </p>
//       </div>
//       <div>
//         <Link
//           to="/login"
//           className="flex items-center justify-center w-full px-4 py-2 text-lg bg-[#d5622d] text-white font-semibold mb-5 rounded placeholder:text-base"
//         >
//           Sign in as User
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CaptainLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const { updateCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      updateCaptain(data.captain);
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-between h-screen p-7">
      <div>
        <img className="w-[180px] mb-5 ml-14" src="./Cab-Rent.svg"></img>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="mb-2 text-lg font-medium">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
