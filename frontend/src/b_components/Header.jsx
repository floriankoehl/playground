import { Link } from "react-router-dom"


// Header.jsx
export default function Header() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-12 bg-gray-300 flex items-center gap-5 px-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}










