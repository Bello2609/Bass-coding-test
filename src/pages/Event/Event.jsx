/* eslint-disable no-unused-vars */
import React from "react";
import { IoGrid } from "react-icons/io5";
import { PiListChecks } from "react-icons/pi";
import GridEvent from "../../Components/GridEvent/GridEvent";
const Event = ()=>{
    return(
        <>
           <div className="w-[70vw] m-10">
                <p className="font-semibold text-[#767676] text-sm">140 search results for</p>
                <div className="flex mt-3 justify-between">
                    <p className="font-semibold text-2xl">
                        Wedding, Lagos   ₦20k - ₦40k, Excellent
                    </p>
                    <div className="flex justify-evenly w-[100px]">
                        <p className="text-3xl w-[30px] h-[30px] cursor-pointer">
                            <IoGrid />
                        </p>
                        <p className="flex items-center justify-evenly rounded-lg text-2xl border border-[#292D32] w-[30px] h-[30px] cursor-pointer">
                            <PiListChecks />
                        </p>
                    </div>
                </div>
                <GridEvent />
           </div>
        </>
    );
}
export default Event;