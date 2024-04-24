import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <h1>Digital</h1>
      <div className="flex items-center space-x-5">
        <ul className="hidden md:flex items-center space-x-8">
          <li>Home</li>
          <li>Services</li>
          <li>Prices</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <div className="flex space-x-5">
          <button>
            <IoSearch />
          </button>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
