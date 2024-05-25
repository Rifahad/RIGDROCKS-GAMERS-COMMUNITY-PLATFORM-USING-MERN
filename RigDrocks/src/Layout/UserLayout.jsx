
import Header from '../Components/User/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/User/Footer'

function UserLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default UserLayout
