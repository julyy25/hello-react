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
    return (
      <div>
        <Link to="/login">Login</Link>| <Link to="/aboutus">About Us</Link>
      </div>
    );
  }
}
export default DynamicLinks;
