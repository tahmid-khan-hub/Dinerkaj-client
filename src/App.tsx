import './App.css'
import AppShell from './components/layout/AppShell'
import { Routes, Route, Navigate, useSearchParams } from 'react-router'
import TasksPage from './pages/Tasks/Tasks'
import PlansPage from './pages/Plans/Plans'
import NotesPage from './pages/Notes/Notes'
import SignInPage from './pages/SignIn/SignIn'

// ── Home Redirect 
function HomeRedirect() {
  const [searchParams] = useSearchParams();
  const signedIn = searchParams.get("signedIn");
  return (
    <Navigate
      to={signedIn ? `/tasks?signedIn=true` : "/tasks"}
      replace
    />
  );
}

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
                <Route path="/" element={<HomeRedirect />} />
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
