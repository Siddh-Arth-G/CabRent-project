import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed flex items-center justify-center w-10 h-10 bg-white rounded-full right-2 top-2">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="p-4 h-1/2">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Siddharth</h2>
            <h4 className="-mt-1 -mb-1 text-xl font-semibold"> HR51 BV 9198</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Wagonr</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">33/2</h3>
                <p className="text-sm text-gray-700">
                  NIT-3, Neelam Chowk, Faridabad
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
        </div>
        <button className="w-full p-2 mt-1 font-semibold text-white bg-green-500 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
