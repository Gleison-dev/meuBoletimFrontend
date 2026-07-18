import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/header";
import LoginStudent from "./pages/LoginStudent/loginStudent";
import LoginTeacher from "./pages/LoginTeacher/loginTeacher";
import DashboardStudent from "./pages/DashboardStudent/dashboardStudent";
import { PrivateRoute } from "./routes/PrivateRoute";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loginStudent" element={<LoginStudent />}></Route>
        <Route path="/loginTeacher" element={<LoginTeacher />}></Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboardStudent"
            element={<DashboardStudent />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
