/* eslint-disable react/prop-types */
const CustomButton = ({searchText, className, style})=>{
    return(
        <>
            <button type="submit" style={style} className={`bg-[#0166FF] font-semibold  text-[#fff] rounded-full cursor-pointer ${className}`}>
                {searchText}
            </button>
        </>
    );
}
export default CustomButton;