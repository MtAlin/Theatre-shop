import { Route, Routes } from "react-router-dom";
import Home from "./Components/SectionComponents/Home";
import Favorite from "./Components/SectionComponents/NavbarComponents/Favorite";
import NavBar from "./Components/SectionComponents/NavBar";
import User from "./Components/SectionComponents/NavbarComponents/User";
import Cart from "./Components/SectionComponents/NavbarComponents/Cart";
import BestSellerDetail from "./Components/NavigationDetail/BestSellerDetail";
import Seller from "./Components/SellerComponents/Seller";
import Costumes from "./Components/Costume/Costumes";
import CostumesDetail from "./Components/NavigationDetail/CostumesDetail";
import Contact from "./Components/SectionComponents/NavbarComponents/Contact";
import { useSelector } from "react-redux";

function App() {
  const sellerData = useSelector((state) => state.counter.sellerData);
  return (
    <div className="project">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costumes" element={<Costumes />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        {sellerData.map((route) => (
          <>
            <Route
              path={`/${route.path}/:id`}
              element={<BestSellerDetail products={route.items} />}
            />
            <Route
              path={`/${route.sellerPath}`}
              element={<Seller products={route.items} link={route.link} />}
            />
          </>
        ))}
        <Route
          path={`/costumeDetail/:coatId`}
          element={
            <CostumesDetail costumes={sellerData} link="costumeDetail" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
