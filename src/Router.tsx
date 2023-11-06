import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Err404 from "./pages/Error404";


export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}