import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import StatsPage from './pages/StatsPage';
import RelevancePage from './pages/RelevancePage';
import GeographyPage from './pages/GeographyPage';
import SkillsPage from './pages/SkillsPage';
import LastVacansiesPage from './pages/LastVacansiesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path='stats' element={<StatsPage />} />
        <Route path='relevance' element={<RelevancePage />} />
        <Route path='geography' element={<GeographyPage />} />
        <Route path='skills' element={<SkillsPage />} />
        <Route path='lastVacansies' element={<LastVacansiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
