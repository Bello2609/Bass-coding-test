/* eslint-disable react/prop-types */
const CustomButton = ({searchText, className})=>{
    return(
        <>
            <button type="submit" className={`bg-[#0166FF] font-semibold text-xs text-[#fff] rounded-full cursor-pointer ${className}`}>
                {searchText}
            </button>
        </>
    );
}
export default CustomButton;