import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="absolute top-0 w-[93%] p-1 text-center"
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-[90px]"
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
