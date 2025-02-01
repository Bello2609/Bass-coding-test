import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Event = lazy(()=>import("./pages/Event/Event"));


const Router = ()=>{
    return(
        <>
            <Routes>
                <Route exact element={
                    <Suspense>
                        <Event />
                    </Suspense>
                } />
            </Routes>
        </>
    );
}
export default Router;