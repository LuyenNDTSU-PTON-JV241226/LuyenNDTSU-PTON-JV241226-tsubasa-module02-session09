import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './ss9-1/Home'
import Contact from './ss9-1/Contact'
import PrivateRouter from './ss9-2/PrivateRouter'
import AdminIndex from './ss9-2/AdminIndex'
import Account from './ss9-2/Account'
import Product from './ss9-2/Product'
import Order from './ss9-2/Order'
import Login from './ss9-4/Login'
import Account4 from './ss9-4/Account4'
import PrivateRouter4 from './ss9-4/PrivateRouter4'
import { useState } from 'react'
import ListProduct from './ss9-3/components/ListProduct'
import ProductDetail from './ss9-3/components/ProductDetail'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
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
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/account"
          element={
            <PrivateRouter4 isAuthenticated={isAuthenticated}>
              <Account4/>
            </PrivateRouter4>
          }
        />
      </Routes>
      {/* ss9-3 */}
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
