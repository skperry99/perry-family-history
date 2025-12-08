import { Link } from "react-router-dom";
import { ancestors } from "../data/ancestors";

export default function HomePage() {
  return (
    <div>
      <h1>Perry Family History</h1>
      <p>
        Stories from the Milburn, Simmons, Tatum, Barber, Ruffins, and White
        lines, leading down to James Clarence Milburn.
      </p>

      <h2>Ancestor Gallery</h2>
      <ul>
        {ancestors.map((a) => (
          <li key={a.id}>
            <Link to={`/ancestor/${a.id}`}>
              {a.name} <span>({a.lifespan})</span>
            </Link>
            {a.relationship && <div className="relationship">{a.relationship}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
