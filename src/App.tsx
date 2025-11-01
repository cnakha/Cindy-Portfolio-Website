import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import AboutMePage from './components/AboutMePage';
import Extras from './components/ExtrasPage';
import NavBar from './imports/NavBar';
import ScrollManager from './components/routing/ScrollManager';

// import Contact from './imports/Contact';

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="font-nhgText size-full relative bg-black">
        {/* Global Navigation Bar */}
        <div className="font-nhgText fixed top-0 left-0 w-full h-[84px] z-50">
          <NavBar />
        </div>

        
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/preview_page.html" element={<PortfolioPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/extras" element={<Extras/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}