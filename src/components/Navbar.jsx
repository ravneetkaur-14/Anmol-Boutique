import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>Anmol Boutique</h1>
        <p>Style That Defines You ✨</p>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/prices">Price List</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
