import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import FormSelect from "../FormSelect/FormSelect";
const Sidebar = ()=>{
    return(
        <>
            <div>
                <div className="flex flex-col items-center justify-center  w-[30vw] h-[100vh] bg-[#F8F8F8]">
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
            </div>
        </>
    );
}
export default Sidebar;