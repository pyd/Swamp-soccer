import {Outlet, Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Members">NOS MEMBRES</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export {NavBar};
