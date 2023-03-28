import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
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
    <Nav />
    </div>
  );
}

export default App;
