import { Outlet, Link } from "react-router-dom";

const links = ["Home", "Newest-Pokemon", "Pokemon-List", "Contact"];

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link} className="nav-item">
              <Link className="nav-link" to={link === "Home" ? "/" : link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
