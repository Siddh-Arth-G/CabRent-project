import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      captainName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <h3 className="mb-2 text-base font-medium">What's our captain's name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="mb-2 text-base font-medium">What's our captain's email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-4 py-2 text-base bg-[#eeeeee] border mb-6 rounded placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="mb-2 text-base font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full px-4 py-2 text-base bg-[#eeeeee] border mb-6 rounded placeholder:text-sm"
            type="password"
            placeholder="password"
          />
          <button className="w-full px-4 py-2 text-lg bg-[#111] text-white font-semibold mb-3 rounded placeholder:text-base">
            Sign Up
          </button>
        </form>
        <p className="mb-3 text-center">
          Already a Captain?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Go to Login Page of Captain
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline"> Google Privacy Policy </span>
          and <span className="underline"> Terms of Service Apply. </span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
