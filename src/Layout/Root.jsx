import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <>
            <div className="w-full rounded-xl relative bg-deep-blue">

                <div className="w-full rounded-xl absolute top-2">

                    <Navbar></Navbar>

                </div>


                <div className="w-full rounded-xl bg-deep-blue">
                    <Outlet></Outlet>

                </div>


                <div className="w-full rounded-xl bg-slate-600">

                    <Footer></Footer>

                </div>


            </div>

        </>
    );
};

export default Root;