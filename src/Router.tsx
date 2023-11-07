import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Err404 from "./pages/Error404";

import Entrar from "./pages/usuario";
import ProdutoPet from "./pages/produtopet";


export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/produtos" element={<ProdutoPet />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}