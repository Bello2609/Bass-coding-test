import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <>
            <div className="flex items-center justify-between mx-16 p-5">
                <h3 className="text-[#0166FF] font-extrabold text-2xl">SHARP EVENT</h3>
                <div className="flexhidden sm:hidden md: items-center justify-between w-[40%]">
                    <p className="text-base text-[#000] font-bold">List Your Space</p>
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center justify-center text-[#0166FF] font-semibold text-sm rounded-xl w-[100px] h-[42px] border-2 border-[#0166FF]">
                            Log in
                        </Link>
                        <Link to="/ss" style={{
                            background: "#0166FF"
                        }} className="flex items-center justify-center text-[#fff] font-semibold text-sm rounded-xl border-2 border-[#0166FF] w-[100px] h-[42px] ml-2">
                            Sign up
                        </Link>
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Header;