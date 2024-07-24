import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Dashboard from './user/Dashboard'
import Order from './user/Order'
import DashboardAdmin from './admin/DashboardAdmin'
import OrderHistory from './admin/OrderHistory'
import Ordersummary from './user/Ordersummary'
import Register from './pages/Register'
import Login from './pages/Login'
import Medlist from './admin/Medlist'
import Customerpg from './admin/Customerpg'
import { useContext } from 'react'
import { isAuthorizedContext } from './context/Context'


function App() {
  const {isAuthorized} = useContext(isAuthorizedContext)

  return (
    <>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/admin/register' element={<Register />} />
      
      <Route path='/user/dashboard' element={isAuthorized?<Dashboard/> : <Home/>} />
      <Route path='/admin/dashboard' element={isAuthorized ? <DashboardAdmin/> : <Home/>} />
      <Route path='/medlist' element={<Medlist/>} />
      <Route path='/customerpg' element={<Customerpg/>} />
      <Route path='/user/order' element={<Order/>} />
      <Route path='/admin/orderhistory' element={<OrderHistory/>} />
      <Route path='/user/ordersummary' element={<Ordersummary/>} />
      
      
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
