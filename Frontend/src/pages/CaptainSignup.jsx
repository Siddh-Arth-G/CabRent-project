import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/captain/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="flex flex-col justify-between h-screen p-7">
      <div>
        <img className="w-[180px] -mt-4 ml-14" src="./Cab-Rent.svg"></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="mb-2 text-base font-medium">
            What's our captain's name?
          </h3>
          <div className="flex gap-4 mb-4">
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

          <h3 className="mb-2 text-base font-medium">
            What's our captain's email?
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-4 py-2 text-base bg-[#eeeeee] border mb-4 rounded placeholder:text-sm"
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
            className="w-full px-4 py-2 text-base bg-[#eeeeee] border mb-4 rounded placeholder:text-sm"
            type="password"
            placeholder="password"
          />

          <h3 className="mb-2 text-base font-medium">
            What's our captain's Vehicle Details
          </h3>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex gap-4">
              <input
                required
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                required
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
                className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
                type="text"
                placeholder="Vehicle Number"
              />
            </div>
            <div className="flex gap-4"> 
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => {
                    setVehicleCapacity(e.target.value);
                }}
                className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
                type="number"
                placeholder="Vehicle Capacity"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
                className="w-1/2 px-4 py-2 text-base bg-[#eeeeee] border rounded placeholder:text-sm"
              >
                <option value="" disabled>Select Vehicel type</option>
                <option value="car">Car</option>
                <option value="motorcycle">MotoCycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button className="w-full px-4 py-2 text-lg bg-[#111] text-white font-semibold mb-3 rounded placeholder:text-base">
            Create captain account
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
