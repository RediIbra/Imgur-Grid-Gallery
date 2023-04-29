import Header from "./components/header/Header";
import { Routes, Route, Outlet } from "react-router-dom";
const DisplayNavbar = () => {
  return (
    <div className="display-sidebar-container">
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  <Routes>
    <Route element={<DisplayNavbar />}></Route>
  </Routes>;
}

export default App;
