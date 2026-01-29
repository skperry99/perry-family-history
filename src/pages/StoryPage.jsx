import { Link } from "react-router-dom";

export default function StoryPage() {
  return (
    <div className="story">
      <header className="story-hero">
        <h1>From Hemlock and Poplar to Me</h1>
        <p className="story-subtitle">
          The Milburn–Simmons–Tatum story, told as a connected narrative with
          historical context, neighborhood geography, and the patterns that
          repeat across generations.
        </p>
      </header>

      <section className="story-callout">
        <h2>The arc in one breath</h2>
        <p>
          In about a hundred years, this paternal line mirrors a wider Black
          American story: from cotton country in rural Texas and Louisiana, to
          refinery towns like Beaumont, to Black professional neighborhoods in
          Beaumont’s South End, and then outward to San Francisco, Gary, and
          Washington State.
        </p>
      </section>

      <section>
        <h2>Chapter 1: Cotton country beginnings</h2>
        <p>
          The story begins in places like Frelsburg and Columbus in Colorado
          County, Texas, and Opelousas in St. Landry Parish, Louisiana: rural
          communities where Black families rebuilt life after slavery under the
          tightening grip of Jim Crow.
        </p>

        <div className="story-cast">
          <span className="story-cast-label">Cast:</span>{" "}
          <Link to="/ancestor/henry-simmons-jr">Henry Simmons Jr</Link>,{" "}
          <Link to="/ancestor/amelia-barber-simmons">Amelia Barber</Link>,{" "}
          <Link to="/ancestor/jr-tatum">J.R. Tatum</Link>,{" "}
          <Link to="/ancestor/eliza-davis-tatum">Eliza Davis</Link>
        </div>
      </section>

      <section>
        <h2>Chapter 2: Beaumont, Texas (Hemlock + McKinley)</h2>
        <p>
          Beaumont’s oil boom transformed the city into a refinery hub. Black
          neighborhoods grew near the work, but also near the institutions that
          made community life possible: churches, segregated schools, and dense
          family networks where the same street names repeat like a chorus.
        </p>

        <div className="story-cast">
          <span className="story-cast-label">Cast:</span>{" "}
          <Link to="/ancestor/mary-jane-simmons-milburn">Jane Simmons</Link>,{" "}
          <Link to="/ancestor/richard-charles-milburn-sr">
            Richard Milburn Sr
          </Link>
        </div>

        <div className="story-callout">
          <h3>Addresses that repeat</h3>
          <p>
            McKinley, Hemlock, and Poplar show up again and again because this
            was a tightly knit, walkable community. The family story is not
            scattered across a map. It’s clustered, neighborly, and connected.
          </p>
        </div>
      </section>

      <section>
        <h2>Chapter 3: Poplar Street (education as resistance)</h2>
        <p>
          Another branch rises along a different path: Black teachers and
          principals building schools and statewide networks in an era when
          resources were intentionally unequal. In this story, Poplar Street
          represents that professional lane of community leadership.
        </p>

        <div className="story-cast">
          <span className="story-cast-label">Cast:</span>{" "}
          <Link to="/ancestor/robert-theophoulus-tatum">Robert Tatum</Link>
        </div>

        <div className="story-callout">
          <h3>Education as a through-line</h3>
          <p>
            This tree holds both kinds of work: refinery shifts and domestic
            labor, and also classrooms and principals’ offices. Together, they
            show how families build futures using every tool available.
          </p>
        </div>
      </section>

      <section>
        <h2>Chapter 4: Westward migration</h2>
        <p>
          Over time, the Hemlock household children and their families moved
          west. San Francisco becomes the next chapter: shipyards, housing
          projects, modest apartments, and the complicated reality of building a
          life in a rapidly changing city.
        </p>
      </section>

      <section>
        <h2>Chapter 5: Convergence (James → Joyce → Houston → Lansing → me)</h2>
        <p>
          At the center of this strand is James Clarence Milburn (1944–2003), my
          father: the youngest of the Hemlock house, a Vietnam-era Army veteran,
          and likely the biological descendant of the Tatum/Davis educator line.
          In 1976, while living in San Francisco, he met my mother. She later
          went to Houston while pregnant, where I was born, and soon after
          returned to Michigan to live in Lansing at her brother Edwin’s house.
        </p>

        <div className="story-cast">
          <span className="story-cast-label">Cast:</span>{" "}
          <Link to="/ancestor/james-clarence-milburn">James Milburn</Link>
        </div>

        <div className="story-callout">
          <h3>Layered truth</h3>
          <p>
            Records often describe a “legal father” and a household story. DNA
            can add a different layer: biological connections that don’t erase
            family life, but deepen it and sometimes complicate it.
          </p>
        </div>
      </section>

      <section>
        <h2>Patterns & “Interesting Things to Point Out”</h2>

        <ul className="story-bullets">
          <li>
            <strong>Education</strong> appears repeatedly, from adult literacy
            gains to teachers, principals, and organizer networks.
          </li>
          <li>
            <strong>Military service</strong> spans multiple wars and multiple
            generations.
          </li>
          <li>
            <strong>Women’s labor</strong> anchors survival and continuity:
            laundresses, homemakers, teachers, and caretakers.
          </li>
          <li>
            <strong>Geography</strong> clusters first (Beaumont streets), then
            branches west and north in later generations.
          </li>
          <li>
            <strong>DNA</strong> can reveal hidden connections that the paper
            record alone never shows.
          </li>
        </ul>
      </section>
    </div>
  );
}
