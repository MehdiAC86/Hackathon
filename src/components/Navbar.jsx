import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="flex justify-between mx-8 my-8">
        <NavLink to="home">
          <img src="https://picsum.photos/100" alt="logo" />
        </NavLink>

        <nav className="flex">
          <ul className="flex items-center gap-4">
            <NavLink to="tuto"> Tuto déco </NavLink>
            <NavLink to="contact"> Contact </NavLink>
          </ul>
        </nav>
      </header>
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
