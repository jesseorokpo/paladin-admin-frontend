import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardScreen } from "@ui/pages/dashboard";
import { LoginScreen } from "@ui/pages/authentication/LoginScreen";

export default function AppAuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />}>
        <Route path="login" element={<LoginScreen />} />
        <Route path="" element={<div />} />
      </Route>
    </Routes>
  );
}
