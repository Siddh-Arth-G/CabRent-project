import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="absolute top-0 w-[93%] p-1 text-center"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 mt-4 bg-yellow-200 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tzGh_8fgG0kuFPxwh_vvey4zzlrDz5nz7A&s"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Pickup</h3>
              <p className="text-sm text-gray-700">{props.ride?.pickUp}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm text-gray-700">{props.ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm text-gray-700">Cash, UPI Payment</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-3 mt-5">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className="w-full p-3 px-10 font-semibold text-gray-700 bg-gray-300 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
              props.confirmRide();
            }}
            className="w-full p-3 px-10 font-semibold text-white bg-green-500 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
