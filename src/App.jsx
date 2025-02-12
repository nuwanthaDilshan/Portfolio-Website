import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes path="/*">
          <Route path="/*" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
