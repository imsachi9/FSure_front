import React, { useState, useEffect, useRef } from "react";

const ContractPop = ({ crop, onClose }) => {
  const [contactVisible, setContactVisible] = useState(false); // State to manage visibility of contact number
  const [contactNo, setContactNo] = useState(""); // State to store the contact number
  const popupRef = useRef();

  useEffect(() => {
    // Disable scrolling in the background
    document.body.style.overflow = "hidden";

    // Clean up when component is unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the popup
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNegotiateClick = () => {
    // Toggle contact visibility
    if (!contactVisible) {
      // Fetch or use the contact number from the crop data
      setContactNo(crop.buyerContactNo);
    }
    setContactVisible(!contactVisible);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      <div
        ref={popupRef}
        className="relative bg-gray-100 rounded-lg p-8 w-4/5 max-w-4xl flex border-4 border-green-600 shadow-xl"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-900 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-1/3 pr-6">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <h1 className="text-14xl-3 font-extrabold text-gray-900 m-0">
            {crop.cropName}
          </h1>
          <p className="text-black mb-4 text-lg">
            <strong className="text-black">Quantity:</strong> {crop.quantity}
            <br />
            <strong className="text-black">Price per Unit:</strong> $
            {crop.pricePerUnit}
            <br />
            <strong className="text-black">Delivery Date:</strong>{" "}
            {crop.deliveryDate}
            <br />
            <strong className="text-black">Description:</strong>{" "}
            {crop.description}
            <br />
            <strong className="text-black">Buyer:</strong> {crop.buyerName}
            <br />
            <strong className="text-black">Location:</strong>{" "}
            {crop.buyerLocation}
          </p>
          <div className="flex space-x-4 mt-6">
            {!contactVisible ? (
              <button
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg border-2 border-yellow-600 shadow-md hover:bg-yellow-400 transition ease-in-out duration-300"
                onClick={handleNegotiateClick}
              >
                Negotiate
              </button>
            ) : (
              <div
                className="bg-yellow-100 text-yellow-900 p-4 rounded-lg border-2 border-yellow-500 shadow-md flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition ease-in-out duration-300"
                onClick={handleNegotiateClick}
              >
                <span className="font-semibold text-lg">Contact No: </span>
                <span className="text-lg ml-2">{contactNo}</span>
              </div>
            )}
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition ease-in-out duration-300"
              onClick={() => {
                // Handle Sign Deal click
              }}
            >
              Sign Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPop;
