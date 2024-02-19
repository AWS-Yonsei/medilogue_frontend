import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const DoctorPortal = lazy(() => import("../pages/ChatBot/DoctorPortal"));
const PatientPortal = lazy(() => import("../pages/ChatBot/PatientPortal"));
const PatientManage = lazy(() => import("../pages/Patient/PatientManage"));
const PatientConsult = lazy(() => import("../pages/Patient_Consult/PatientConsult"));
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
    path: "doctorportal",
    element: (
      <Suspense fallback={Loading}>
        <DoctorPortal />
      </Suspense>
    ),
  },
  {
    path: "patientportal",
    element: (
      <Suspense fallback={Loading}>
        <PatientPortal />
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
    path: "patient_consult",
    element: (
      <Suspense fallback={Loading}>
        <PatientConsult />
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
