import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="absolute top-0 w-[93%] p-1 text-center"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Confirm your Ride</h3>
      <div className="flex flex-col items-center justify-between gap-2">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
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
              <h3 className="text-lg font-medium">292/17</h3>
              <p className="text-sm text-gray-700">
                Roshan Nagar, Faridabad, Haryana
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
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full p-2 mt-5 font-semibold text-white bg-green-500 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
