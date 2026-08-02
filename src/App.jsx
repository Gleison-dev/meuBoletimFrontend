import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/header";
import Login from "./pages/Login/login";
import DashboardStudent from "./pages/DashboardStudent/dashboardStudent";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import DashboardTeacher from "./pages/DashBoardTeacher/dashboardTeacher";
import Profile from "./pages/Profile/profile";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboardStudent"
            element={<DashboardStudent />}
          ></Route>
          <Route
            path="/dashboardTeacher"
            element={<DashboardTeacher />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}
