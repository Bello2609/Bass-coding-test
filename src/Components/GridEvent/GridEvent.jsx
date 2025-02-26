import * as images from "../../image";
import CustomButton from "../CustomButton/CustomButton";
const NoOfEvents = [1,2,3,4,5,6];
const GridEvent = ()=>{
    return(
        <>
           <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-7">
                {
                    NoOfEvents.map(key=>(
                        <>
                            <div className="flex flex-col w-[396px] sm:w-fit h-[381px] p-2" key={key}>
                                <img src={images.event} alt="event hall" />
                                <div className="flex justify-between my-2">
                                    <div className="flex flex-col font-semibold">
                                        <p className="text-lg font-semibold">Oniru Event Center</p>
                                        <p className="text-[#A2A2A2] text-xs">0.4 km from Oniru Beach</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-lg text-[#0166FF]">Very good</p>
                                            <p className="text-[#A2A2A2] text-xs">832 reviews</p>
                                        </div>
                                        <p className="flex items-center justify-center rounded-full ml-2 text-[#0166FF] font-semibold text-xs bg-[#E1EAFC] w-[54px] h-[32px]">
                                            9.2
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col font-semibold">
                                        <p className="text-sm font-semibold">Facilities</p>
                                        <p className="text-[#A2A2A2] text-xs w-[150px]">
                                            Free packing space
                                            Changing Room
                                            Toilet
                                            1000 Seat and Table
                                            Air-Condition
                                            Audio-Visual Equipment
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col justify-end items-end font-semibold">
                                            <p className="text-base text-[#000] mb-3">#35</p>
                                            <CustomButton style={{
                                                fontSize: "11px"
                                            }} searchText="See booking options" className="w-[176px] h-[35px]" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </>
                    ))
                }
           </div>
        </>
    );
}
export default GridEvent;
