/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
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