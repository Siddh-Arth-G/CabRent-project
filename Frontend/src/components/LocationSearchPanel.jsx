import React from "react";

const LocationSearchPanel = ({
  suggestions = [], // Default to an empty array to prevent errors
  setVehiclePanel,
  setPanelOpen,
  setPickUp,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickUp") {
      setPickUp(suggestion.description); // Store only the description (string)
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div className="mt-3">
      {/* Debugging: Log suggestions array */}
      {/* {console.log("Suggestions:", suggestions)} */}

      {/* Display fetched suggestions */}
      {suggestions.length > 0 ? (
        suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="flex items-center justify-start gap-4 p-3 my-2 border-2 border-gray-50 active:border-black rounded-xl"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {typeof elem?.description === "string"
                ? elem.description
                : JSON.stringify(elem)}
            </h4>
          </div>
        ))
      ) : (
        <p className="mt-5 text-xl text-center text-gray-500">No suggestions found</p>
      )}
    </div>
  );
};

export default LocationSearchPanel;
