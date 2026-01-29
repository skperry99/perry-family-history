import { Link } from "react-router-dom";

export default function LinesPage() {
  return (
    <div>
      <h1>Family Lines</h1>
      <p className="text-muted">
        Use this page as a “choose your branch” hub so the site stays organized
        as more relatives (and my maternal side) are added.
      </p>

      <div className="card-grid">
        <section className="card">
          <h2>Paternal Roots</h2>
          <p className="text-muted">
            Milburn · Simmons · Tatum and related branches, centered on Beaumont,
            Texas (Hemlock, McKinley, Poplar) and later migration west.
          </p>
          <div className="card-actions">
            <Link className="btn-link" to="/story">
              Read the story
            </Link>
            <Link className="btn-link" to="/">
              Browse ancestors
            </Link>
          </div>
        </section>

        <section className="card">
          <h2>Maternal Roots</h2>
          <p className="text-muted">
            Coming soon. This section will add my maternal line without mixing
            everything together.
          </p>
          <div className="card-actions">
            <Link className="btn-link" to="/about">
              Project approach
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
