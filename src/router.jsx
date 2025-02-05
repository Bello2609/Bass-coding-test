import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
const Event = lazy(()=>import("./pages/Event/Event"));


const Router = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" exact element={
                    <Suspense>
                        <Layout>
                            <Event />
                        </Layout>
                    </Suspense>
                } />
            </Routes>
        </>
    );
}
export default Router;