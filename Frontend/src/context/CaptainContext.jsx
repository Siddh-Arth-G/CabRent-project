// import { createContext, useState, useContext } from "react";

// export const CaptainDataContext = createContext();

// const CaptainContext = ({ children }) => {
//   const [captain, setCaptain] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const updateCaptain = (captainData) => {
//     setCaptain(captainData);
//   };
//   console.log(captain);

//   const value = {
//     captain,
//     setCaptain,
//     isLoading,
//     setIsLoading,
//     error,
//     setError,
//     updateCaptain,
//   };
//   console.log(value);

//   return (
//     <CaptainDataContext.Provider value={value}>
//       {children}
//     </CaptainDataContext.Provider>
//   );
// };

// export default CaptainContext;



import { createContext, useState, useContext, useEffect } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCaptain = localStorage.getItem("captain");
    if (savedCaptain) {
      setCaptain(JSON.parse(savedCaptain));
    }
  }, []); // Run only on mount

  const updateCaptain = (captainData) => {
    console.log("Updating captain:", captainData);
    setCaptain(captainData);
    localStorage.setItem("captain", JSON.stringify(captainData));
  };

  // console.log("Captain state:", captain);

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };
  // console.log('Value',value);
  

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
