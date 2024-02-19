import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
<<<<<<< HEAD
const DoctorPortal = lazy(() => import("../pages/ChatBot/DoctorPortal"));
const PatientPortal = lazy(() => import("../pages/ChatBot/PatientPortal"));
const ChatPortal = lazy(() => import("../pages/ChatBot/ChatPortal"));
const PatientManage = lazy(() => import("../pages/Patient/PatientManage"));
const MissionManage = lazy(() => import("../pages/Mission/MissionManage"));
const PatientConsult = lazy(() => import("../pages/Patient_Consult/PatientConsult"));
const QuizSelect = lazy(() => import("../pages/Main/QuizSelect"));
const QuizDetail = lazy(() => import("../pages/Main/QuizDetail"));
const PatientRecord = lazy(() => import("../pages/Patient/PatientRecord"));
=======
const DoctorPortal = lazy(() => import("../pages/Doctor/Portal/DoctorPortal"));
const PatientPortal = lazy(() => import("../pages/Patient/Portal/PatientPortal"));
const ChatPortal = lazy(() => import("../pages/Chat/ChatPortal"));
const PatientManage = lazy(() => import("../pages/Doctor/Manage/PatientManage"));
const MissionManage = lazy(() => import("../pages/Patient/Mission/MissionManage"));
const PatientConsult = lazy(() => import("../pages/Patient/Consult/PatientConsult"));
const Quiz = lazy(() => import("../pages/Quiz/Quiz"));
const QuizDetail = lazy(() => import("../pages/Quiz/QuizDetail"));
const PatientRecord = lazy(() => import("../pages/Patient/Record/PatientRecord"));
>>>>>>> 2d2a968121906170192b68966b10d83531f73fcf
const Calendar = lazy(() => import("../pages/Calendar/Calendar"));
const Solution = lazy(() => import("../pages/Solution/Solution"));
const Quiz = lazy(() => import("../pages/Main/GameScreen"));

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
    path: "doctor_portal",
    element: (
      <Suspense fallback={Loading}>
        <DoctorPortal />
      </Suspense>
    ),
  },
  {
    path: "patient_portal",
    element: (
      <Suspense fallback={Loading}>
        <PatientPortal />
      </Suspense>
    ),
  },
  {
    path: "chat_portal",
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
    path: "mission_manage",
    element: (
      <Suspense fallback={Loading}>
        <MissionManage />
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
    path: "quiz/feedback/:category",
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
        <QuizSelect />
      </Suspense>
    ),
  },
  {
    path: "quiz/:category",
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
    path: "calendar",
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
