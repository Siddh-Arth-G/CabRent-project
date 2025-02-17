import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import LiveTracking from "../components/LiveTracking";

const Riding = (props) => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on('ride-ended', () => {
    navigate('/home');
  })

  console.log(ride);
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed flex items-center justify-center w-10 h-10 bg-white rounded-full right-2 top-2"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <LiveTracking/>
      </div>
      <div className="p-4 h-1/2">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="-mt-1 -mb-1 text-xl font-semibold">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Wagonr</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Destination</h3>
                <p className="text-sm text-gray-700">{ride?.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
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
