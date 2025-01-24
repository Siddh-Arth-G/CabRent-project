import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="relative h-screen">
      <div className="fixed top-0 flex items-center justify-between w-screen p-3">
        <img className="w-[160px]" src="./Cab-Rent.svg" alt="" />
        <Link
          to="/captain-home"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="object-cover w-full h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div onClick={() => {
        setFinishRidePanel(true);
      }} className="relative flex items-center justify-between p-6 bg-yellow-300 h-1/5">
        <h5
          className="absolute top-0 w-[95%] p-1 text-center"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold text-gray-800">4.6 km away</h4>
        <button className="p-3 px-10 font-semibold text-white bg-gray-800 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div ref={finishRidePanelRef} className="fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white">
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
