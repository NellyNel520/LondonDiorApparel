import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])





  return (
    <div className="App">
      <Nav
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
