import { Suspense, lazy } from "react";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import UserLayout from "./Layout/UserLayout";
import Stream from "./Pages/Stream";
import Room from "./Pages/Room";

const Signup = lazy(() => import("./Pages/Signup"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserLayout />} >
        </Route>
          <Route path="/about" element={<About />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/room/:roomId" element={<Room />} />

          <Route path="/signup" element={ <Suspense fallback={<div>Loading...</div>}> <Signup /> </Suspense>  }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
