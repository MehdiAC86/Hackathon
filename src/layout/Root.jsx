import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Navbar />
      <main className="w-[90%] mt-10 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;