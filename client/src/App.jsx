import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Favorites,
  Ecepage,
  Courses,
  Eeepage,
  Mcapage,
  Mbapage,
  Csepage,
  Agripage,
  Aepage,
  Cepage,
  Bcepage, 
  Videopage, 
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/ecepage" element={<Ecepage />} />
        <Route path="/eeepage" element={<Eeepage />} />
        <Route path="/mcapage" element={<Mcapage />} />
        <Route path="/mbapage" element={<Mbapage />} />
        <Route path="/cepage" element={<Cepage />} />
        <Route path="/csepage" element={<Csepage />} />
        <Route path="/agripage" element={<Agripage />} />
        <Route path="/aepage" element={<Aepage />} />
        <Route path="/bcepage" element={<Bcepage />} />

        <Route path="/courses/vlsi" element={<Courses />} />
        <Route path="/courses/ede" element={<Courses />} />
        <Route path="/courses/analog" element={<Courses />} />
        <Route path="/courses/controlsystem" element={<Courses />} />
        <Route path="/courses/electromagnetics" element={<Courses />} />
        <Route path="/courses/signalprocessing" element={<Courses />} />
        <Route path="/courses/powerelectronics" element={<Courses />} />
        <Route path="/eeepage/courses/circuitanalysis" element={<Courses />} />
        <Route path="/eeepage/courses/electronics" element={<Courses />} />
        <Route path="/eeepage/courses/electromagnetism" element={<Courses />} />
        <Route path="/eeepage/courses/powersystem" element={<Courses />} />
        <Route path="/eeepage/courses/controlsystem" element={<Courses />} />
        <Route path="/eeepage/courses/communicationsystems" element={<Courses />} />
        <Route path="/bcepage/courses/processdesignandanalysis" element={<Courses />} />
        <Route path="/bcepage/courses/thermodynamics" element={<Courses />} />
        <Route path="/bcepage/courses/transportphenomena" element={<Courses />} />
        <Route path="/bcepage/courses/reactionengineering" element={<Courses />} />
        <Route path="/bcepage/courses/materialsscience" element={<Courses />} />
        <Route path="/bcepage/courses/processcontrol" element={<Courses />} />
        <Route path="/bcepage/courses/environmentalengineering" element={<Courses />} />
        <Route  path="/videopage/logicalcomplexity" element={<Videopage />} />
        <Route  path="/videopage/designmethodologies" element={<Videopage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
