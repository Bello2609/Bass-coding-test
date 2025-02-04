/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Events from "../../components/Events/Events";
const Layout = ()=>{
    return (
        <>
            <div>
                <Header />
                <div>
                    <Sidebar />
                    <Events />
                </div>
                
            </div>
        </>
    );
}
export default Layout;