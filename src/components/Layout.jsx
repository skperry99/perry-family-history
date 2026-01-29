import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <div className="site-header-inner">
            <div className="brand">
              <Link to="/">
                Perry Family History
                <span>Milburn · Simmons · Tatum and beyond</span>
              </Link>
            </div>

            <nav className="site-nav" aria-label="Primary">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/lines">Lines</NavLink>
              <NavLink to="/story">Story</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div>
          <p>© {new Date().getFullYear()} Perry Family History</p>
        </div>
      </footer>
    </div>
  );
}
