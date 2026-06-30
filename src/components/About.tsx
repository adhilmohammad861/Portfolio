import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full-Stack Software Engineer with 3+ years of experience building
          scalable enterprise applications using C#, .NET, ASP.NET Core, React,
          and PostgreSQL. Experienced in designing APIs, data-driven
          applications, and modern web platforms that improve operational
          efficiency and user experience.
        </p>
        <p className="para">
          Hands-on experience integrating generative AI solutions, RAG pipelines,
          and LLM-powered features into production applications. Strong
          foundation in object-oriented design, REST APIs, testing, database
          design, and Agile development. Currently pursuing an M.S. in
          Information Systems at Central Michigan University with a focus on
          AI-enabled software systems and enterprise application development.
        </p>
      </div>
    </div>
  );
};

export default About;
