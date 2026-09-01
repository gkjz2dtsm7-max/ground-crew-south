import { Navigate, Route, Routes } from "react-router-dom";
import { DeskShell } from "./shell";
import { AboutPage } from "./pages/About";
import { BenchPage } from "./pages/Bench";
import { EmployerPage } from "./pages/Employer";
import { HomePage } from "./pages/Home";
import { SeatsPage } from "./pages/Seats";
import { TraineePage } from "./pages/Trainee";
import { TrainingPage } from "./pages/Training";

export default function App() {
  return (
    <DeskShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seats" element={<SeatsPage />} />
        <Route path="/trainee" element={<TraineePage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/bench" element={<BenchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </DeskShell>
  );
}
