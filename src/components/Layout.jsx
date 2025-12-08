import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <div className="site-header-inner">
            <div className="brand">
              <Link to="/">
                Perry Family History
                <span>Milburn · Simmons · Tatum & more</span>
              </Link>
            </div>
            <nav className="site-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
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
