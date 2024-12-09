import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgentSelectionPage from './pages/AgentSelectionPage';
import ChatPage from './pages/ChatPage';

export function CustomerApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select-agents" element={<AgentSelectionPage />} />
      <Route path="/chat/:jobId" element={<ChatPage />} />
    </Routes>
  );
}