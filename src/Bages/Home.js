import Footer from "../componant/Footer";
import NavBar from "../componant/NavBar";
import ProductList from "../componant/ProductList";
import Slide from "../componant/Slider";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Slide />
      <ProductList />
      <Footer />
    </div>
  );
}
