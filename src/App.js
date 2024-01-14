import { Route, Routes } from "react-router-dom";
import UserTemplates from "./templates/UserTemplates/UserTemplates";
import HomePage from "./pages/HomePage/HomePage";
import ProductHouse from "./components/ProductHouse/ProductHouse";
import Page404 from "./pages/Page404/Page404";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplates />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<ProductHouse />} path="product-house" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        {/* <Route element={<Page404 />} path="*" /> */}
      </Routes>
    </>
  );
}

export default App;
