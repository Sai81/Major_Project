import { Link } from "react-router-dom";

const AgentNavbar = () => {
  return (
    <nav className="navbar">
      <h1>Major Project</h1>
      <div className="links">
        <Link to="/">Pending Claims</Link>
        <Link to="/profile" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Profile</Link>
      </div>
    </nav>
  );
}
 
export default AgentNavbar;