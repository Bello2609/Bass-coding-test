/* eslint-disable react/prop-types */
const FormSelect = ({label})=>{
    return(
        <>
            <div className="flex m-2">
                <input type="checkbox" name="checkbox" className="w-[18px] h-[18px]" />
                <label className="text-[#767676] text-sm font-semibold ml-2">{label}</label>
            </div>
        </>
    );
}
export default FormSelect;