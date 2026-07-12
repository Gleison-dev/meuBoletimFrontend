import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}
