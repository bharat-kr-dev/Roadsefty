import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import GlobalRoadSafety from './pages/GlobalRoadSafety';
import DataAnalysis from './pages/DataAnalysis';
import SafeSystem from './pages/SafeSystem';
import FutureSolutions from './pages/FutureSolutions';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="global-safety" element={<GlobalRoadSafety />} />
          <Route path="data-analysis" element={<DataAnalysis />} />
          <Route path="safe-system" element={<SafeSystem />} />
          <Route path="future-solutions" element={<FutureSolutions />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
