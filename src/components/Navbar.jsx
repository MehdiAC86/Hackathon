import { NavLink } from "react-router-dom";
import "../assets/Style/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="flex">
        <NavLink to="/">
          <lord-icon
            className="logo"
            src="https://cdn.lordicon.com/scubrffn.json"
            trigger="hover"
            style={{ width: 150, height: 150 }}
          ></lord-icon>
        </NavLink>

        <ul className="flex items-center gap-4">

          <NavLink to="tuto" className="navigation">
            Tuto déco
          </NavLink>
          <NavLink to="images" className="navigation">
            Images
          </NavLink>
          <NavLink to="contact" className="navigation">
            Contact
          </NavLink>
          <NavLink to="tuto"> Tuto déco </NavLink>
          <NavLink to="images"> Images </NavLink>
          <NavLink to="contact"> Contact </NavLink>
        </ul>
      </nav>

      <div className="deco">
        <lottie-player
          src="https://lottie.host/423d0d88-924d-4aea-9711-9a14b8325a3a/ulIRvuHAFK.json"
          background="##ffffff"
          speed="1"
          style={{ width: 150, height: 150 }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <lottie-player
          src="https://lottie.host/423d0d88-924d-4aea-9711-9a14b8325a3a/ulIRvuHAFK.json"
          background="##ffffff"
          speed="1"
          style={{ width: 150, height: 150 }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <lottie-player
          src="https://lottie.host/423d0d88-924d-4aea-9711-9a14b8325a3a/ulIRvuHAFK.json"
          background="##ffffff"
          speed="1"
          style={{ width: 150, height: 150 }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <lottie-player
          src="https://lottie.host/423d0d88-924d-4aea-9711-9a14b8325a3a/ulIRvuHAFK.json"
          background="##ffffff"
          speed="1"
          style={{ width: 150, height: 150 }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>
    </>
  );
}

export default Navbar;