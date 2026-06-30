import "./styles/Work.css";
import WorkImage from "./WorkImage";

type Project = {
  name: string;
  subtitle: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "NL2Data",
    subtitle: "Natural Language to SQL Query Engine",
    category: "AI / Enterprise Web App · 2026 – Present",
    tools:
      ".NET 10, ASP.NET Core, React, OpenAI GPT-4o, SQL Server, Entity Framework Core",
    description:
      "Converts plain-English business questions into executable SQL with schema-aware GPT-4o prompts, dynamic schema introspection, and a 92% self-healing auto-correction loop. React dashboard with query history, charts, and CSV export.",
    image: "/images/nl2data.webp",
    link: "https://nl-2-data.vercel.app",
  },
  {
    name: "FleetMind AI",
    subtitle: "Intelligent Fleet Document & Analytics Platform",
    category: "AI Document Platform · 2026 – Present",
    tools:
      "React 18, .NET 10, PostgreSQL 18, pgvector, OpenAI GPT-4o, Tesseract.NET, EF Core, Dapper",
    description:
      "Upload fleet PDFs and ask anything in plain English. AI classifies 17 document types, extracts structured data, auto-links trucks via VIN, embeds into pgvector, and answers via hybrid SQL, RAG, or compliance queries with citations.",
    image: "/images/fleetmind.webp",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-box" key={project.name}>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.subtitle}</p>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
