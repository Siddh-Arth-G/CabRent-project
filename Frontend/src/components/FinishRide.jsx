import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="absolute top-0 w-[93%] p-1 text-center"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">
        Finish this ride
      </h3>
      <div className="flex items-center justify-between p-4 mt-4 border-2 border-yellow-200 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tzGh_8fgG0kuFPxwh_vvey4zzlrDz5nz7A&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Hardik Kumar</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">292/17</h3>
              <p className="text-sm text-gray-700">
                Roshan Nagar, Faridabad, Haryana
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">B-110</h3>
              <p className="text-sm text-gray-700">
                Delta-1, Greater Noida, Up
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹197.38</h3>
              <p className="text-sm text-gray-700">Cash, UPI Payment</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <Link
            to="/captain-home"
            className="flex justify-center w-full p-3 mt-10 font-semibold text-white bg-green-500 rounded-lg"
          >
            Finish Ride
          </Link>
          {/* <p className="mt-10 text-xs">Click on Finish Ride button if you have completed the payment. </p> */}
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
