import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ContractPop from "./ContractPop";

// Individual Crop Item Component
const CropItem = ({ crop, onClick }) => {
  const itemStyle = useMemo(
    () => ({
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #4CAF50", // Green border
      height: "100%", // Ensure full height for equal column heights
      cursor: "pointer",
    }),
    []
  );

  const infoStyle = useMemo(
    () => ({
      padding: "0.5rem",
    }),
    []
  );

  return (
    <div
      className="w-full max-w-xs rounded-lg bg-white shadow-md overflow-hidden"
      style={itemStyle}
      onClick={() => onClick(crop)} // Trigger the popup on click
    >
      {/* Crop Image */}
      <div className="relative w-full h-40 bg-gray-200">
        <img
          className="w-full h-full object-cover border-none"
          alt={crop.cropName}
          src={crop.image} // Use the image prop here to display the correct image
        />
      </div>

      {/* Crop Info */}
      <div className="p-4 text-center" style={infoStyle}>
        <div className="text-lg font-semibold text-gray-900">
          Crop Name: {crop.cropName}
        </div>
        <div className="text-xl font-bold text-gray-900">
          Price per Unit: ${crop.pricePerUnit}
        </div>
        <div className="text-sm text-black">
          Delivery Date: {crop.Delivery_date}
        </div>
        <div className="text-sm text-black">Buyer's Name: {crop.buyerName}</div>
      </div>
    </div>
  );
};

CropItem.propTypes = {
  crop: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Crop List Component
const CropList = () => {
  const initialCrops = [
    {
      id: 1,
      cropName: "Wheat",
      pricePerUnit: 30,
      Delivery_date: "2024-09-01",
      buyerName: "Buyer 1",
      image: "/greenApple.png", // Adjust path to public folder
      description: "High-quality wheat for sale.",
      buyerLocation: "California, USA",
    },
    {
      id: 2,
      cropName: "Rice",
      pricePerUnit: 50,
      Delivery_date: "2024-09-02",
      buyerName: "Buyer 2",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Organic rice, harvested recently.",
      buyerLocation: "Texas, USA",
    },
    {
      id: 3,
      cropName: "Corn",
      pricePerUnit: 45,
      Delivery_date: "2024-09-03",
      buyerName: "Buyer 3",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Fresh corn from local farms.",
      buyerLocation: "Florida, USA",
    },
    {
      id: 4,
      cropName: "Wheat",
      pricePerUnit: 30,
      Delivery_date: "2024-09-01",
      buyerName: "Buyer 1",
      image: "/greenApple.png", // Adjust path to public folder
      description: "High-quality wheat for sale.",
      buyerLocation: "California, USA",
    },
    {
      id: 5,
      cropName: "Rice",
      pricePerUnit: 50,
      Delivery_date: "2024-09-02",
      buyerName: "Buyer 2",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Organic rice, harvested recently.",
      buyerLocation: "Texas, USA",
    },
    {
      id: 6,
      cropName: "Corn",
      pricePerUnit: 45,
      Delivery_date: "2024-09-03",
      buyerName: "Buyer 3",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Fresh corn from local farms.",
      buyerLocation: "Florida, USA",
    },
    {
      id: 7,
      cropName: "Rice",
      pricePerUnit: 50,
      Delivery_date: "2024-09-02",
      buyerName: "Buyer 2",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Organic rice, harvested recently.",
      buyerLocation: "Texas, USA",
    },
    {
      id: 8,
      cropName: "Corn",
      pricePerUnit: 45,
      Delivery_date: "2024-09-03",
      buyerName: "Buyer 3",
      image: "/greenApple.png", // Adjust path to public folder
      description: "Fresh corn from local farms.",
      buyerLocation: "Florida, USA",
    },
    // Add more crop data here...
  ];

  const [crops, setCrops] = useState(initialCrops);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState(null); // State to hold the selected crop for the popup
  const cropsPerPage = 6;

  // Handle sorting based on price
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sortedCrops = [...crops].sort((a, b) => {
      return value === "lowToHigh"
        ? a.pricePerUnit - b.pricePerUnit
        : b.pricePerUnit - a.pricePerUnit;
    });

    setCrops(sortedCrops);
  };

  // Get current crops based on pagination
  const indexOfLastCrop = currentPage * cropsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - cropsPerPage;
  const currentCrops = crops.slice(indexOfFirstCrop, indexOfLastCrop);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(crops.length / cropsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle click on a crop item
  const handleCropClick = (crop) => {
    setSelectedCrop(crop); // Set the selected crop to open the popup
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setSelectedCrop(null); // Clear the selected crop to close the popup
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter Dropdown */}
      <div className="flex items-center justify-start mb-4 ml-20">
        <label
          htmlFor="sort"
          className="text-lg font-semibold text-gray-500 mr-4"
        >
          Filter:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ease-in-out duration-300"
        >
          <option value="lowToHigh">Sort - Low to High</option>
          <option value="highToLow">Sort - High to Low</option>
        </select>
      </div>

      {/* Crop List */}
      <div className="flex flex-wrap justify-center gap-6">
        {currentCrops.map((crop) => (
          <div key={crop.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CropItem crop={crop} onClick={handleCropClick} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          className={`p-2 mx-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-green-600 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className={`p-2 mx-2 border rounded ${
            currentPage === Math.ceil(crops.length / cropsPerPage)
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-green-600 text-white"
          }`}
          disabled={currentPage === Math.ceil(crops.length / cropsPerPage)}
        >
          Next
        </button>
      </div>

      {/* Popup */}
      {selectedCrop && (
        <ContractPop crop={selectedCrop} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default CropList;
