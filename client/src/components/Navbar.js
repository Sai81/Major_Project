import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Major Project</h1>
      <div className="links">
        <Link to="/">Documents</Link>
        <Link to="/user_claims">Insurance</Link>
        <Link to="/profile" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Profile</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;