import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import MainPage from './components/MainPage'
import PrivateRoute from './components/PrivateRoutes'

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<LoginForm />}/>

            <Route path='/welcome' element={
              <PrivateRoute >
                <MainPage />
              </PrivateRoute>}
            />
        </Routes>
    </Router>
  )
}

export default App
