import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const ChatPortal = lazy(() => import("../pages/ChatBot/ChatPortal"));
const PatientManage = lazy(() => import("../pages/Patient/PatientManage"));
const Quiz = lazy(() => import("../pages/Main/Quiz"));
const QuizDetail = lazy(() => import("../pages/Main/QuizDetail"));
const PatientRecord = lazy(() => import("../pages/Patient/PatientRecord"));
const Calendar = lazy(() => import("../pages/Calendar/Calendar"));
const Solution = lazy(() => import("../pages/Solution/Solution"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={Loading}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "chatportal",
    element: (
      <Suspense fallback={Loading}>
        <ChatPortal />
      </Suspense>
    ),
  },
  {
    path: "patient_manage",
    element: (
      <Suspense fallback={Loading}>
        <PatientManage />
      </Suspense>
    ),
  },
  {
    path: "quiz/:quizId",
    element: (
      <Suspense fallback={Loading}>
        <QuizDetail />
      </Suspense>
    ),
  },
  {
    path: "quiz",
    element: (
      <Suspense fallback={Loading}>
        <Quiz />
      </Suspense>
    ),
  },
  {
    path: "record/:patientId",
    element: (
      <Suspense fallback={Loading}>
        <PatientRecord />
      </Suspense>
    ),
  },
  {
    path: "calendar/:date",
    element: (
      <Suspense fallback={Loading}>
        <Calendar />
      </Suspense>
    ),
  },
  {
    path: "solution",
    element: (
      <Suspense fallback={Loading}>
        <Solution />
      </Suspense>
    ),
  },
]);
export default root;
