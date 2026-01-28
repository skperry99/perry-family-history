import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ancestors } from "../data/ancestors";

function normalize(str) {
  return (str ?? "").toLowerCase().trim();
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [onlyDirectLine, setOnlyDirectLine] = useState(false);

  const filtered = useMemo(() => {
    const q = normalize(query);

    let list = ancestors;

    // Optional: "direct line" filter based on relationship wording.
    // Tweak these keywords to match your preferred phrasing.
    if (onlyDirectLine) {
      const directKeywords = [
        "father",
        "mother",
        "grandfather",
        "grandmother",
        "great-grandfather",
        "great-grandmother",
        "great-great",
        "ancestor",
        "direct",
      ];

      list = list.filter((a) => {
        const rel = normalize(a.relationship);
        return directKeywords.some((kw) => rel.includes(kw));
      });
    }

    if (!q) return list;

    return list.filter((a) => {
      const haystack = [a.name, a.lifespan, a.relationship]
        .map(normalize)
        .join(" | ");

      return haystack.includes(q);
    });
  }, [query, onlyDirectLine]);

  const total = ancestors.length;
  const shown = filtered.length;

  return (
    <div>
      <h1>Perry Family History</h1>
      <p className="home-intro">
        Stories from the Milburn, Simmons, Tatum, Barber, Ruffins, White, and
        Davis lines, told as lives in context.
      </p>

      <section className="home-controls" aria-label="Search and filters">
        <label className="search-label">
          <span className="search-label-text">
            Search by name, lifespan, or relationship
          </span>
          <input
            className="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "Tatum", "1901", or "grandmother"'
          />
        </label>

        <label className="filter-toggle">
          <input
            className="filter-toggle-input"
            type="checkbox"
            checked={onlyDirectLine}
            onChange={(e) => setOnlyDirectLine(e.target.checked)}
          />
          <span>Show only direct-line ancestors</span>
        </label>

        <div className="results-meta">
          Showing <strong>{shown}</strong> of <strong>{total}</strong>
          {query ? (
            <>
              {" "}
              for <span className="results-query">“{query}”</span>
            </>
          ) : null}
        </div>
      </section>

      <h2 className="home-section-title">Ancestor Gallery</h2>

      {shown === 0 ? (
        <div className="empty-state" role="status" aria-live="polite">
          <p className="empty-state-text">
            No matches. Try a broader search (ex: “Texas”, “Milburn”, “188”), or
            clear the filters.
          </p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setQuery("");
              setOnlyDirectLine(false);
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="ancestor-list">
          {filtered.map((a) => (
            <li key={a.id}>
              <Link to={`/ancestor/${a.id}`}>
                {a.name} <span>({a.lifespan})</span>
              </Link>
              {a.relationship && (
                <div className="relationship">{a.relationship}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
