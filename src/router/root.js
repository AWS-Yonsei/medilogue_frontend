import { Suspense,lazy } from "react";

const { createBrowserRouter} = require("react-router-dom");
const Loading = <div>Loading...</div>
const Home = lazy(() => import("../pages/Home/Home"))
const Login = lazy(() => import("../pages/Login/Login"))
const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Home/></Suspense>
    },
    {
        path: "login",
        element: <Suspense fallback={Loading}><Login/></Suspense>
    }
])
export default root;