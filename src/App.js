import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

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

// USER DEFINED TAG :: <Hello />
function FollowingComponent() {
  return (
    <div>
      <h1>Following...</h1>
    </div>
  );
}

function FollowersComponent() {
  return (
    <div>
      <h1>Followers</h1>
    </div>
  );
}

function Login() {
  const handleLogin = () => {
    localStorage.setItem("token", "dummy-token");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Logout </h1>
      <button onClick={handleLogout}>Click to Logout</button>
    </div>
  );
}

function BodyguardComponent({ children }) {
  let token = localStorage.getItem("token");
  return token ? children : <Login />;
}

export default App;
