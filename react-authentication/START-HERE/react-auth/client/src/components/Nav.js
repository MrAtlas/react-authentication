import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Nav = () => {

  const { authUser } = useContext(UserContext);

  return (
    <nav>
      {authUser === null ?
        <>
          <Link className="signup" to="/signup">Sign up</Link>
          <Link className="signin" to="/signin">Sign in</Link>
        </>
        :  
        <>
        <span>Welcome {authUser.username}</span>
        <Link className="settings" to="/settings">Settings</Link>
        <Link className="signout" to="/signout">Signout</Link>
      </>}
    </nav>
  );
}

export default Nav;