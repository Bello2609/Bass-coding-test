import CustomButton from "../CustomButton/CustomButton";
import * as images from "../../image";
const NoOfEvents = [images.event, images.event2, images.event3, images.event4, images.event3, images.event2];
const ListEvent = ()=>{
    return (
        <>
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
                {
                    NoOfEvents.map(key=>(
                        <>
                            <div className="flex  w-full lg:w-full md:w-full sm:w-[350px] h-[231px] sm:h-full p-2" key={key}>
                                
                                    <img src={key} alt="event hall" className="w-[202px] md:w-[202px] sm:w-[101px] h-[202px] md:h-[202px] sm:h-[101px]" />
                                    <div className="flex flex-col justify-between  w-full lg:w-full md:w-full sm:w-[249px] h-[200px] ml-3">
                                        <div className="flex justify-between">
                                            <div className="flex flex-col font-semibold">
                                                <p className="text-lg sm:text-[10px] font-semibold">Oniru Event Center</p>
                                                <p className="text-[#A2A2A2] text-xs">0.4 km from Oniru Beach</p>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex flex-col font-semibold">
                                                    <p className="text-lg sm:text-sm text-[#0166FF]">Very good</p>
                                                    <p className="text-[#A2A2A2] text-xs">832 reviews</p>
                                                </div>
                                                <p className="flex items-center justify-center rounded-full ml-2 text-[#0166FF] font-semibold text-xs bg-[#E1EAFC] w-[54px] sm:w-[] h-[32px]">
                                                    9.2
                                                </p>
                                            </div>
                                            
                                        </div>
                                
                                        <div className="flex justify-between">
                                            <div className="flex flex-col font-semibold sm:w-fit">
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
                                            {/* <div className="flex"> */}
                                                <div className="flex flex-col justify-end items-end lg:items-end md:items-end sm:items-start font-semibold">
                                                    <p className="text-base text-[#000] mb-3">#35</p>
                                                    <CustomButton style={{
                                                        fontSize: "11px"
                                                    }} searchText="See booking options" className="w-[176px] lg:w-[176px] md:w-[176px] sm:w-[104px] h-[35px] lg:h-[35px] sm:h-[45px]" />
                                                </div>
                                            {/* </div> */}
                                            
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
export default ListEvent;