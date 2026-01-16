import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoadmapDetails from './Components/AcademicCopilot/RoadmapDetailsNew';
import './App.css';

// Import components
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Utils/ProtectedRoute';
import StudentDashboard from './Components/StudentDashboard';
import StaffDashboard from './Components/StaffDashboard';
import { AuthProvider } from './context/AuthContext';

// Assignment components
import { AssignmentList, AssignmentDetails, StaffAssignments } from './Components/Assignments';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/roadmap/:id" element={<RoadmapDetails />} />
        <Route
          path="/staff-dashboard"
          element={
            <ProtectedRoute>
              <StaffDashboard />
            </ProtectedRoute>
          }
        />
        {/* Assignment Routes */}
        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <AssignmentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assignment/:id"
          element={
            <ProtectedRoute>
              <AssignmentDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff/assignments"
          element={
            <ProtectedRoute>
              <StaffAssignments />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;