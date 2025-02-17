import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {
  const { captain } = React.useContext(CaptainDataContext);

  // console.log(captain); 
  // console.log(captain.captain.fullname.firstname)

  // const captainDetail = JSON.parse(localStorage.getItem("captain")); // Parse the string into an object

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {/* {captainDetail?.fullname?.firstname +
              " " +
              captainDetail?.fullname?.lastname} */}
            {captain.captain.fullname.firstname + " " + captain.captain.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹498.20</h4>
          <p className="text-sm text-center text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-5 p-3 mt-8 bg-gray-200 rounded-3xl">
        <div className="text-center ">
          <i className="mb-2 text-3xl font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.3</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>
        <div className="text-center ">
          <i className="mb-2 text-3xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.3</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>
        <div className="text-center ">
          <i className="mb-2 text-3xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.3</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
