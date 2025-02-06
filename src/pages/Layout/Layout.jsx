/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

import Footer from "../../Components/Footer/Footer";
const Layout = ({children})=>{
    return (
        <>
            <div className="flex flex-col font-inter w-[100%] overflow-x-hidden">
                <Header />
                    <div className="flex">
                        <Sidebar />
                        {children}
                    </div>
                <Footer />
            </div>
        </>
    );
}
export default Layout;