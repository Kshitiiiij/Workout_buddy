import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from '../src/pages/Login'
import SignUp from '../src/pages/SignUp'

function App() {

  return (
    <div className="App">
       <Navbar />
      <div className="pages">
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </div>

    </div>
  )
}

export default App
