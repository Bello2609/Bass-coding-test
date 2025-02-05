/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Events from "../../Components/Events/Events";
import Footer from "../../Components/Footer/Footer";
const Layout = ()=>{
    return (
        <>
            <div className="flex flex-col font-inter w-[100%] overflow-x-hidden">
                <Header />
                    <div>
                        <Sidebar />
                        <Events />
                    </div>
                <Footer />
            </div>
        </>
    );
}
export default Layout;