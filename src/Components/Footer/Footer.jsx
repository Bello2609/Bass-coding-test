import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
const Footer = ()=>{
    return(
        <>
            <div className="flex flex-col  w-[100vw] h-fit md:h-fit sm:h-fit bg-[#D8DAE8] justify-evenly overflow-x-hidden py-5 px-16">
                <div className="flex md:flex-col sm:flex-col items-center justify-between  md:items-start sm:items-start  mt-10">
                    <div className="flex flex-col">
                        <h3 className="text-[#0166FF] font-extrabold text-2xl">SHARP EVENT</h3>
                        <p className="w-72 flex-wrap text-[#000] opacity-60 font-inter font-semibold text-base my-3">
                            Sharp Event is a service 
                            provider site for finding 
                            the best places to host 
                            your events
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl text-[#000] font-semibold">Our service</h4>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-xl text-[#000] font-semibold opacity-60">Help center</h4>
                        </div>
                        <div className="flex flex-col my-2">
                            <h4 className="text-xl text-[#000] font-semibold opacity-60">FAQ</h4>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl  text-[#000] font-semibold">Company</h4>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-xl text-[#000] font-semibold opacity-60">About us</h4>
                        </div>
                        <div className="flex flex-col my-2">
                            <h4 className="text-xl text-[#000] font-semibold opacity-60">Host</h4>
                        </div>
                        <div className="flex flex-col my-2">
                            <h4 className="text-xl text-[#000] font-semibold opacity-60">Activities</h4>
                        </div>
                        <div className="flex flex-col my-2">
                            <h4 className="text-xl  text-[#000] font-semibold opacity-60">Cities</h4>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl  text-[#000] font-semibold">Get in touch</h4>
                        <div className="flex flex-col mt-3">
                            <h4 className="text-xl  text-[#000] font-semibold opacity-60">Emailadress@gmail.com</h4>
                        </div>
                        <div className="flex flex-col my-2">
                            <h4 className="text-xl  text-[#000] font-semibold opacity-60">Address of the company</h4>
                        </div>
                        <div className="flex text-[#000] text-3xl">
                            <a href="https://www.facebook.com/enterprisehubs01?mibextid=ZbWKwL"><RiFacebookFill /></a>
                            <a href="https://www.instagram.com/enterprisehubs?igsh=YzljYTk1ODg3Zg==" className="sm:mx-2"><IoLogoInstagram /></a>
                            <a href="https://www.linkedin.com/company/enterprise-hubs/"><BsTwitterX /></a>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  font-medium text-base text-center mx-16 sm:mx-10">
                    <p className="text-[#000] mt-5 text-base font-bold italic opacity-60">C 2024 SharpEvent. Event booking agency</p>
                </div>
            </div>
        </>
    );
}
export default Footer;