import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import BackToHome from "./components/BackToHome/BackToHome";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import PatientStatus from "./components/PatientStatus/PatientStatus";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPatients, getDoctors } from "./features/patient/patientSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
    dispatch(getDoctors());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route
          path="/status"
          element={
            <PrivateRoute>
              <PatientStatus />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/back-to-home" element={<BackToHome />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
