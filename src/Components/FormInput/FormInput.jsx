/* eslint-disable react/prop-types */
// import React from "react";

const FormInput = ({
    label,
    type,
    name,
    placeholder,
    onChange,
    value,
 }) => {
    return (
       <div className="flex flex-col gap-4 mt-3 w-full sm:w-full ">
          <div className="flex flex-auto">
             <label className="font-semibold text-[#252524]">{label}</label>
          </div>
          <div className=" flex-auto border-solid rounded-2xl h-11">
             <input
                className="w-full h-full border border-[#fff] rounded-xl pl-8 outline-0 bg-[#fff] text-[#767676] text-sm font-semibold"
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
             />
          </div>
          {/* {error && error[name] && (
             <p className="error text-danger m-0">{error[name].message}</p>
          )} */}
       </div>
    );
 };
 
 export default FormInput;
 