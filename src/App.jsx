import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import Dashboard from './user/Dashboard'
import Order from './user/Order'
import DashboardAdmin from './admin/DashboardAdmin'
import OrderHistory from './admin/OrderHistory'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register />} />
      <Route path='/user/dashboard' element={<Dashboard/>} />
      <Route path='/admin/dashboard' element={<DashboardAdmin/>} />
      <Route path='/user/order' element={<Order/>} />
      <Route path='/admin/orderhistory' element={<OrderHistory/>} />
      
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
