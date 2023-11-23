import { Link } from "react-router-dom";
import ".//navbar.css";

function Navbar() {
  const navigations = [
    {
      id: 1,
      href: "/",
      name: "Accueil",
    },
    {
      id: 2,
      href: "#",
      name: "Lorem ipsum",
    },
    {
      id: 3,
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header className="flex justify-around	">
      <img
        src="https://i.pinimg.com/564x/ed/ce/fe/edcefe37e9772fb7b1267c522e74d601.jpg"
        alt="logo"
      />

      <nav className="flex">
        <ul className="flex items-center gap-4">
          {navigations.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
