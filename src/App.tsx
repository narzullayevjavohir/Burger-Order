import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { About, Contact, Order } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
