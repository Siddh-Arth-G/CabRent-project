import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="absolute top-0 w-[93%] p-1 text-center"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Looking for a driver</h3>
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
              <h3 className="text-lg font-medium">Pickup</h3>
              <p className="text-sm text-gray-700">
                {props.pickUp}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm text-gray-700">
                {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm text-gray-700">
                Cash, UPI Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
