import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full-Stack Software Engineer with 3+ years of experience building
          scalable enterprise applications using C#, .NET, ASP.NET Core, React,
          and PostgreSQL. Experienced designing APIs, data-driven platforms, and
          modern web products that improve operational efficiency and user
          experience.
        </p>
        <p className="para">
          Hands-on with generative AI in production — RAG pipelines, embeddings,
          prompt engineering, and LLM-powered features with strong guardrails.
          Solid foundation in object-oriented design, REST APIs, testing,
          database design, and Agile delivery. Recently completed an M.S. in
          Information Systems at Central Michigan University, focused on
          AI-enabled software systems and enterprise application development.
        </p>
      </div>
    </div>
  );
};

export default About;
