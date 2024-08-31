import React, { useState, memo } from "react";
import PropTypes from "prop-types";

const UpdateForm = memo(({ className = "" }) => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div
      className={`relative bg-[url('/public/divelementorwidgetwrap@3x.png')] bg-cover bg-no-repeat bg-top rounded-xl text-center text-sm text-gray-200 font-manrope ${className} p-4 md:p-6 lg:p-8`}
    >
      <form className="mx-auto max-w-md w-full p-6">
        <h2 className="text-3xl-5 font-extrabold text-gray-300 text-left mb-4">
          Update Contract
        </h2>
        <p className="text-lg font-medium text-goldenrod-200 text-left mb-8">
          Time to buy stuff?
        </p>

        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="crop Name"
            type="text"
          />
        </div>

        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="quantity (in kg)"
            type="number"
            maxLength="5"
          />
        </div>

        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="flex">
          <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
            <input
              className="w-full bg-transparent text-black-600 outline-none px-4"
              placeholder="proposed price (per unit)"
              type="number"
            />
          </div>
          <button className="w-20 bg-primary rounded-xl h-10 flex items-center justify-center ml-2 cursor-pointer">
            <div className="text-sm font-medium text-white">ask ai</div>
          </button>
        </div>
        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="delivery date (dd/mm/yyyy)"
            type="date"
          />
        </div>
        <div className="rounded-xl bg-white border border-primary w-full h-12 flex items-center mb-4">
          <input
            className="w-full bg-transparent text-black-600 outline-none px-4"
            placeholder="description (optional)"
            type="text"
          />
        </div>
        <button className="w-2/5 bg-primary rounded-xl h-10 flex items-center justify-center mb-6 cursor-pointer">
          <div className="text-sm font-medium text-white">Update Contract</div>
        </button>
      </form>
    </div>
  );
});

UpdateForm.propTypes = {
  className: PropTypes.string,
};

export default UpdateForm;
