import React from "react";

const LocationSearchPanel = (props) => {
  // Sample array of location
  const locations = [
    "Delta-1 Metro Station, Greater Noida, UP-201310",
    "Sharda University, Knowledge Park-III, UP-201306",
    "Crown Interior, Mathura Road, Delhi NCR, HR-121020",
    "New Eta Chungi Road, Aligarh, UP-202001",
    "Gaur City, Gaziabad, UP-210010",
  ];

  return (
    <div>
      {/* This is sample data */}
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex items-center justify-start gap-4 p-2 my-2 border-2 border-gray-200 active:border-black rounded-xl"
        >
          <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
