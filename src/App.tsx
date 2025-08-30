import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import NavBar from './imports/NavBar';
import ScrollManager from './components/routing/ScrollManager';

// import Contact from './imports/Contact';

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="size-full relative">
        {/* Global Navigation Bar */}
        <div className="fixed top-0 left-0 w-full h-[84px] z-50">
          <NavBar />
        </div>

        
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/preview_page.html" element={<PortfolioPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}