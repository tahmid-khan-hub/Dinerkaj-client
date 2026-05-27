import './App.css'
import AppShell from './components/layout/AppShell'
import { Routes, Route, Navigate } from 'react-router'
import TasksPage from './pages/Tasks/Tasks'
import PlansPage from './pages/Plans/Plans'
import NotesPage from './pages/Notes/Notes'
import SignInPage from './pages/SignIn/SignIn'

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/*"
          element={
            <AppShell>
              <Routes>
                <Route path="/" element={<Navigate to="/tasks" replace />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/plans" element={<PlansPage />} />
                <Route path="/notes" element={<NotesPage />} />
              </Routes>
            </AppShell>
          }
        />
      </Routes>
    </>
  )
}

export default App
