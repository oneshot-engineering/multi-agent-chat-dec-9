import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

export function CustomerApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat/:jobId" element={<ChatPage />} />
     
    </Routes>
  );
}
