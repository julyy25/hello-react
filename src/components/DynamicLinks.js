import { Link } from "react-router-dom";

function DynamicLinks() {
  let token = localStorage.getItem("token");

  if (token) {
    return (
      <div>
        <Link to="/following">Following</Link> |<Link to="/followers">Followers</Link> |<Link to="/logout">Logout</Link>{" "}
        |<Link to="/aboutus">About Us</Link>
      </div>
    );
  } else {
    // Not Logged In
    return (
      <div>
        <Link to="/login">Login</Link> |<Link to="/register">Register</Link> | <Link to="/aboutus">About Us</Link>
      </div>
    );
  }
}
export default DynamicLinks;
