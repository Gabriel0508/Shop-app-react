import "./App.scss";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
