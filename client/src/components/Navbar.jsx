import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="min-h-[75px] bg-[#eeeff1] w-full flex items-center">
      <div className="nav-center w-full max-w-screen-xl flex justify-between items-center mx-auto">
        <div className="logo">
          <h1 className="text-3xl font-bold">LOGO</h1>
        </div>
        <div className="list flex items-center gap-8">
          <p>About Us</p>
          <p>Cafe Menu</p>
          <p>Contact</p>
          <button>ORDER NOW</button>
          <button className="black-button">
            <Link to="/auth/register"> SIGN IN</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
