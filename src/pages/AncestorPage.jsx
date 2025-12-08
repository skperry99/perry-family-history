import { useParams, Link } from "react-router-dom";
import { getAncestorById } from "../data/ancestors";

export default function AncestorPage() {
  const { id } = useParams();
  const ancestor = getAncestorById(id);

  if (!ancestor) {
    return (
      <div>
        <p>Ancestor not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <article className="ancestor-page">
      <Link to="/">← Back to ancestor gallery</Link>
      <h1>{ancestor.name}</h1>
      <p className="lifespan">{ancestor.lifespan}</p>
      {ancestor.relationship && (
        <p className="relationship">{ancestor.relationship}</p>
      )}

      <section>
        <h2>Snapshot</h2>
        <ul>
          {ancestor.snapshot.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Their Life in Story Form</h2>
        {ancestor.story.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </section>

      {ancestor.worldAround && ancestor.worldAround.length > 0 && (
        <section>
          <h2>The World Around Them</h2>
          {ancestor.worldAround.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>
      )}

      {ancestor.legacy && ancestor.legacy.length > 0 && (
        <section>
          <h2>Family & Legacy</h2>
          {ancestor.legacy.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </section>
      )}

      {ancestor.notes && ancestor.notes.length > 0 && (
        <section>
          <h2>Interesting to Note</h2>
          <ul>
            {ancestor.notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
