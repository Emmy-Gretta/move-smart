import React, { useState, useEffect } from "react";

const SetInputs = ({ inputType, placeHolder , value , onChange , errorMessage , label}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEdge, setIsEdge] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const isEdgeBrowser = /Edge\//.test(navigator.userAgent);
    setIsEdge(isEdgeBrowser);
  }, []);

  return (
    <section className="auth-button flex flex-row gap-72 ">
      <div className="relative">
        <input
          type={inputType === "password" && !isEdge ? (showPassword ? "text" : "password") : inputType}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className="w-[250px] pl-4 pr-4 py-2  bg-[#D9D9D980] h-[40px] border-[1px] text-sm items-center border-[#807d7d] rounded-[5px] outline-none  placeholder:text-[#8E8E8E] placeholder:text-sm  mb-5" 
        />
        {inputType === "password" && !isEdge && (
          <div
            className="absolute top-[19px] right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <img src="/Signup/HidePword.svg" alt="Show password" width={13} height={20} /> : <img src="/Signup/ShowPword.svg" alt="Show password" width={13} height={20} />}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1 ml-1">
          {errorMessage}
        </p>
      )}
    </section>
  );
};

export default SetInputs;