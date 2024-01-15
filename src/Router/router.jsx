import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Tabs/Home";
import Projects from "../Tabs/Projects";
import Contact from "../Tabs/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,                
                
            },
                        
            {
                path:"/projects",
                element:<Projects></Projects>,
            },
            
            {
                path:"/contact",
                element:<Contact></Contact>,
            },
           
        ]
    }
])

export default router;