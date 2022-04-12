import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Wrapper({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
