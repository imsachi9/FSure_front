import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("openContracts");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-gray-600">
            😊
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Sachin KR</h1>
            <p className="text-gray-600">Farmer/Buyer</p>
            <p className="text-gray-500">San Francisco, India</p>
          </div>
        </div>
        <button
          onClick={handleEditClick}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          <div className="mt-4">
            <label className="block text-gray-700">Profile Picture</label>
            <input
              type="file"
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Update Location"
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Contact No.</label>
            <input
              type="text"
              placeholder="Contact No."
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="flex border-b-2 border-gray-200">
          <button
            onClick={() => handleTabClick("openContracts")}
            className={`flex-1 text-center py-2 ${
              activeTab === "openContracts"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Open Contracts
          </button>
          <button
            onClick={() => handleTabClick("fixedContracts")}
            className={`flex-1 text-center py-2 ${
              activeTab === "fixedContracts"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Fixed Contracts
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "openContracts" && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="px-4 py-2 text-left text-black">
                      Contract ID
                    </th>
                    <th className="px-4 py-2 text-left text-black">
                      Created Date
                    </th>
                    <th className="px-4 py-2 text-left text-black">
                      Crop Name
                    </th>
                    <th className="px-4 py-2 text-left text-black">Quantity</th>
                    <th className="px-4 py-2 text-left text-black">Status</th>
                    <th className="px-4 py-2 text-left text-black">
                      Proposed Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "fixedContracts" && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="px-4 py-2 text-left text-black">
                      Contract ID
                    </th>
                    <th className="px-4 py-2 text-left text-black">
                      Delivery Date
                    </th>
                    <th className="px-4 py-2 text-left text-black">
                      Final Price
                    </th>
                    <th className="px-4 py-2 text-left text-black">
                      Crop Name
                    </th>
                    <th className="px-4 py-2 text-left text-black">Quantity</th>
                    <th className="px-4 py-2 text-left text-black">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                    <td className="px-4 py-2 border-b text-black">--</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
