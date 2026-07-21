import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/header";
import LoginStudent from "./pages/LoginStudent/loginStudent";
import DashboardStudent from "./pages/DashboardStudent/dashboardStudent";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import DashboardTeacher from "./pages/DashBoardTeacher/dashboardTeacher";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginStudent" element={<LoginStudent />}></Route>
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
        </Route>
      </Routes>
    </>
  );
}
