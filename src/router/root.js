import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const DoctorPortal = lazy(() => import("../pages/Doctor/Portal/DoctorPortal"));
const PatientPortal = lazy(() => import("../pages/Patient/Portal/PatientPortal"));
const ChatPortal = lazy(() => import("../pages/Chat/Portal/ChatPortal"));
const ChatRoom = lazy(() => import("../pages/Chat/Chatroom/ChatRoom"));
const PatientManage = lazy(() => import("../pages/Doctor/Manage/PatientManage"));
const MissionManage = lazy(() => import("../pages/Patient/Mission/MissionManage"));
const PatientAnalyze = lazy(() => import("../pages/Patient/Analyze/PatientAnalyze"));
const PatientConsult = lazy(() => import("../pages/Patient/Consult/PatientConsult"));
const PatientRecord = lazy(() => import("../pages/Patient/Record/PatientRecord"));
const Calendar = lazy(() => import("../pages/Calendar/Calendar"));
const Solution = lazy(() => import("../pages/Solution/Solution"));
const Quiz = lazy(() => import("../pages/Quiz/Quiz"));
const QuizDetail = lazy(() => import("../pages/Quiz/QuizDetail"));
const QuizSelect = lazy(() => import("../pages/Quiz/QuizSelect"));

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
    path: "chat_room",
    element: (
      <Suspense fallback={Loading}>
        <ChatRoom />
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
    path: "patient_analyze",
    element: (
      <Suspense fallback={Loading}>
        <PatientAnalyze />
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
