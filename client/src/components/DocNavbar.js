import { Link } from "react-router-dom";

const DocNavbar = () => {
  return (
    <nav className="navbar">
      <h1>MedBlocks</h1>
      <div className="links">
        <Link to="/">Patient Documents</Link>
        <Link to="/profile" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Profile</Link>
      </div>
    </nav>
  );
}
 
export default DocNavbar;