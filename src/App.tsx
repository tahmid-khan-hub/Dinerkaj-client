import './App.css'
import AppShell from './components/layout/AppShell'
import TasksPage from './pages/Tasks/Tasks'

function App() {

  return (
    <>
      <AppShell>
        <TasksPage />
      </AppShell>
    </>
  )
}

export default App
