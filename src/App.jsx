import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';

function App() {
 

  return (
    <>
       <Navbar/>
       <Outlet/>
      <footer>footer</footer> 

     
    </>
  )
}

export default App
