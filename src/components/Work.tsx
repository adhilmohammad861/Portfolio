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
    category: "AI / Enterprise Web App · 2026",
    tools:
      ".NET 10, ASP.NET Core, React, OpenAI GPT-4o, SQL Server, Entity Framework Core, LangChain",
    description:
      "Converts plain-English business questions into executable SQL with a schema-aware GPT-4o pipeline and dynamic schema introspection. Auto-correction loop reaches 92% self-healing success. React dashboard with history, charts, and CSV export for non-technical users.",
    image: "/images/nl2data.webp",
    link: "https://nl-2-data.vercel.app",
  },
  {
    name: "FleetMind AI",
    subtitle: "Intelligent Fleet Document & Analytics Platform",
    category: "AI Document Platform · 2026",
    tools:
      ".NET 10, ASP.NET Core, PostgreSQL 16, pgvector, OpenAI GPT-4o, Tesseract.NET, EF Core, Docker",
    description:
      "End-to-end AI platform that OCRs and indexes 50+ weekly trucking documents, auto-links trucks via VIN, and answers via hybrid SQL / RAG / compliance queries with citations. Async pipeline (OCR → extract → chunk → embed) makes uploads queryable in under 30 seconds.",
    image: "/images/fleetmind.webp",
  },
  {
    name: "Kiwanis Club of Plainfield",
    subtitle: "Nonprofit Community Web Platform",
    category: "Full-Stack Web · Nonprofit · 2026",
    tools:
      "React, Supabase, JavaScript, HTML5/CSS3, GiveButter, AI-Assisted Development (Lovable)",
    description:
      "Full nonprofit platform — public events portal, member calendar, board admin dashboard, and contact. Role-based event CRUD in Supabase with real-time updates, application/support notifications, GiveButter ticketing, and a branded responsive design system (Kiwanis Blue / Gold).",
    image: "/images/kiwanis.webp",
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
