import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">
          <Link to="/">Perry Family History</Link>
        </div>
        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Perry Family History</p>
      </footer>
    </div>
  );
}
