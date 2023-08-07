import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
