import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import FormSelect from "../FormSelect/FormSelect";
import * as images from "../../image";
const Sidebar = ()=>{
    return(
        <>
            <div className="w-[30vw]">
                <div className="flex flex-col items-center justify-center  h-[100vh] bg-[#F8F8F8]">
                    <div className="flex flex-col w-[326px] h-auto">
                        <div className="text-left w-full my-3">
                            <h3 className="font-bold text-xl">Your Search</h3>
                        </div>
                        <form className="flex flex-col h-auto">
                            <FormInput type="text" placeholder="Wedding" label="Event Type" />
                            <FormInput type="text" placeholder="Lagos" label="Location" />
                            <FormInput type="text" placeholder="#20k - #40k" label="Price Range" />
                            <FormInput type="text" placeholder="Execellent" label="Rating" />
                            <div className="mt-5">
                                <CustomButton searchText="Search" className="w-[100%] h-[42px] mt-10" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col m-10">
                    <h3 className="font-bold text-xl mb-2">Popular filters</h3>
                    <FormSelect label="Wedding" />
                    <FormSelect label="Dinner Parties" />
                    <FormSelect label="Meeting" />
                    <FormSelect label="Networking" />
                </div>
                <div className="flex flex-col m-10">
                    <img src={images.Range} alt="range" className="flex w-[333px] h-[61px]" />
                    <div className="flex justify-between mt-3">
                        <div className="flex flex-col mt-3">
                            <label className="text-[#767676] text-sm font-semibold ">Min Price</label>
                            <div className="flex border border-[#767676] rounded-md w-[136px] h-[29px] mt-2">
                                <input type="text" name="price range" className="w-[100px] border-0 p-1 outline-0"  />
                                    <div className="flex items-center justify-evenly w-[36px]">
                                        <div className="bg-[#767676] h-[15px] w-[2px] opacity-60"></div>
                                        <p>#</p>
                                    </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label className="text-[#767676] text-sm font-semibold ">Max Price</label>
                            <div className="flex border border-[#767676] rounded-md w-[136px] h-[29px] mt-2">
                                <input type="text" name="price range" className="w-[100px] border-0 p-1 outline-0"  />
                                    <div className="flex items-center justify-evenly w-[36px]">
                                        <div className="bg-[#767676] h-[15px] w-[2px] opacity-60"></div>
                                        <p>#</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col m-10 pb-20">
                    <h3 className="font-bold text-xl mb-2">Guest Rating</h3>
                    <FormSelect label="Any" />
                    <FormSelect label="Excellent" />
                    <FormSelect label="Very Good" />
                    <FormSelect label="Good" />
                </div>
            </div>
        </>
    );
}
export default Sidebar;