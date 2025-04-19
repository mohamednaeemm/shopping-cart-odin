import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-6 top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mohamed Naeem's Store</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/store" className="hover:text-gray-300">Store</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;