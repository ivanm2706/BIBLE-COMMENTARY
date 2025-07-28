import React from 'react';
import StartPage from './pages/StartPage';
import BookSelectionPage from './pages/BookSelectionPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BookCommentPage from './pages/BookCommentPage';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartPage />} />
        <Route path='/book' element={<BookSelectionPage />} />
        <Route path='/book/:bookId' element={<BookCommentPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
