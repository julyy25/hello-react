import { Link } from "react-router-dom";

function DynamicLinks() {
  let token = localStorage.getItem("token");

  if (token) {
    return (
      <div className="row justify-content-start align-items-center bg-success" style={{ height: "50px" }}>
        <div className="col-10 ">
          <div>
            <Link className="text-light h5" to="/message">
              Message{" "}
            </Link>
            |
            <Link className="text-light h5" to="/following">
              Following{" "}
            </Link>
            |
            <Link className="text-light h5" to="/followers">
              Followers{" "}
            </Link>
            |
            <Link className="text-light h5" to="/logout">
              Logout{" "}
            </Link>
            |
            <Link className="text-light h5" to="/aboutus">
              About Us
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    // Not Logged In
    return <div></div>;
  }
}
export default DynamicLinks;
