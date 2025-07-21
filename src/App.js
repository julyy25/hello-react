import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FollowingComponent from "./components/FollowingComponent";
import FollowersComponent from "./components/FollowersComponent";
import Login from "./components/Login";
import Logout from "./components/Logout";
import BodyguardComponent from "./components/BodyguardComponent";

// USER DEFFINED TAG :: CONFIGURATION
function App() {
  return (
    <BrowserRouter>
      <h1>My Insta</h1>
      <div>
        <Link to="/following">Following</Link> | <Link to="/followers">Followers</Link> | <Link to="/login">Login</Link>{" "}
        | <Link to="/logout">Logout</Link>
      </div>

      <Routes>
        <Route
          path="/following"
          element={
            <BodyguardComponent>
              <FollowingComponent />
            </BodyguardComponent>
          }
        />
        <Route
          path="/followers"
          element={
            <BodyguardComponent>
              <FollowersComponent />
            </BodyguardComponent>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<FollowersComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
