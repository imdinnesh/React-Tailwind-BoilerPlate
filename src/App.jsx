import './App.css'
import {Route,Routes} from 'react-router-dom'
import Lobby from './Pages/Lobby'
import RoomPage from './Pages/RoomPage'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Lobby/>}/>
        <Route path='/:roomId' element={<RoomPage/>}/>
      </Routes>
    </div>
  )
}

export default App
