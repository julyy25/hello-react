import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FollowingComponent from "./components/FollowingComponent";
import FollowersComponent from "./components/FollowersComponent";
import Login from "./components/Login";
import Logout from "./components/Logout";
import BodyguardComponent from "./components/BodyguardComponent";
import AboutusComponent from "./components/AboutusComponent";
import DynamicLinks from "./components/DynamicLinks";
import RegisterComponent from "./components/RegisterComponent";
import MessageComponent from "./components/MessageComponent";

// USER DEFFINED TAG :: CONFIGURATION
function App() {
  return (
    <BrowserRouter>
      <h1>My Insta</h1>

      <DynamicLinks />

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
        <Route
          path="/message"
          element={
            <BodyguardComponent>
              <MessageComponent />
            </BodyguardComponent>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<FollowersComponent />} />
        <Route path="/aboutus" element={<AboutusComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
