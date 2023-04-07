import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from '../src/pages/Login'
import SignUp from '../src/pages/SignUp'
import {useAuthContext} from '../src/hooks/useAuthContext'


function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
       <Navbar />
      <div className="pages">
       
        <Routes>
          <Route path='/' element={user ? <Home />: <Navigate to='/login'/> } />
          <Route path='/login' element={!user ?<Login />: <Navigate to = '/' />} />
          <Route path='/signup' element={!user?<SignUp />: <Navigate to='/' />} />

        </Routes>
      </div>

    </div>
  )
}

export default App
