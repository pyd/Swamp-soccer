import {Outlet, Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Blog">BLOG</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/PlayerCard">Cards</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export {NavBar};
