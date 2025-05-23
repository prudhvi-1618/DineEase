import { BrowserRouter,Route,Routes } from "react-router"
import BookingLayout from './pages/BookingLayout'
import Home from "./components/Home";
import Category from "./components/Category";
import Cart from "./components/Cart";
import User from "./components/User";
import UserForm from "./components/UserForm";
import OtpVerify from "./components/OtpVerify";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingLayout/>}>
          <Route index element={<Home/>} />
          <Route path="category" element={<Category/>} />
          <Route path="cart">
              <Route index element={<Cart/>}/>
              <Route path="signin" element={<UserForm/>}/>
          </Route>
          <Route path="user">
            <Route path="signin" element={<UserForm/>}/>
            <Route path="verify" element={<OtpVerify/>}/>
            <Route path=":phone_number" element={<User/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
