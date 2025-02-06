/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { PiListChecks } from "react-icons/pi";
import GridEvent from "../../Components/GridEvent/GridEvent";
import ListEvent from "../../Components/ListEvent/ListEvent";
const Event = ()=>{
    const [ isGrid, setGrid ] = useState(true);
    return(
        <>
           <div className="w-[70vw] m-10 sm:m-5">
                <p className="font-semibold text-[#767676] text-sm">140 search results for</p>
                <div className="flex mt-3 justify-between lg:w-full md:w-full sm:w-[350px]">
                    <p className="font-semibold text-2xl sm:text-base">
                        Wedding, Lagos   ₦20k - ₦40k, Excellent
                    </p>
                    <div className="flex justify-evenly w-[100px]">
                        <p className="text-3xl w-[30px] h-[30px] cursor-pointer" onClick={()=> setGrid(true)}>
                            <IoGrid />
                        </p>
                        <p className="flex items-center justify-evenly rounded-lg text-2xl border border-[#292D32] w-[30px] h-[30px] cursor-pointer" onClick={()=> setGrid(!isGrid)}>
                            <PiListChecks />
                        </p>
                    </div>
                </div>
                {
                    isGrid ? <GridEvent /> : <ListEvent />
                }
           </div>
        </>
    );
}
export default Event;