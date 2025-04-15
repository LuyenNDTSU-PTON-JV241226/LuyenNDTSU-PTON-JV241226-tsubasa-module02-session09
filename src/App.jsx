import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './ss9-1/Home'
import Contact from './ss9-1/Contact'
import PrivateRouter from './ss9-2/PrivateRouter'
import AdminIndex from './ss9-2/AdminIndex'
import Account from './ss9-2/Account'
import Product from './ss9-2/Product'
import Order from './ss9-2/Order'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/ss9-1/contact' element={<Contact/>}/>
        <Route path='/ss9-1/admin' element={<PrivateRouter/> }>
          <Route path='adminIndex' element={<AdminIndex/>} />
          <Route path='account' element={<Account/>} />
          <Route path='product' element={<Product/>} />
          <Route path='order' element={<Order/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
