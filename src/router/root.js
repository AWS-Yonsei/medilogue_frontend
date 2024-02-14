import { Suspense,lazy } from "react";

const { createBrowserRouter} = require("react-router-dom");
const Loading = <div>Loading...</div>
const Home = lazy(() => import("../pages/Home/Home"))
const Login = lazy(() => import("../pages/Login/Login"))
const ChatPortal = lazy(() => import("../pages/ChatBot/ChatPortal"))
const PatientManage = lazy(() => import("../pages/Patient/PatientManage"))
const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Home/></Suspense>
    },
    {
        path: "login",
        element: <Suspense fallback={Loading}><Login/></Suspense>
    },
    {
        path: "chatportal",
        element: <Suspense fallback={Loading}><ChatPortal/></Suspense>
    },
    {
        path: "patient_manage",
        element: <Suspense fallback={Loading}><PatientManage/></Suspense>
    }
])
export default root;