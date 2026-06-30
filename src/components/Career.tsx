import "./styles/Career.css";

const timeline = [
  {
    role: "M.S. in Information Systems",
    org: "Central Michigan University",
    period: "2024 – 2026",
    description:
      "GPA 3.8/4.0 · Mt. Pleasant, MI. Coursework: Database Management, Enterprise Application Development, Web Programming, Data Analytics, Information Security.",
  },
  {
    role: "Operations Analyst — Data, SQL & Reporting",
    org: "Kotak Mahindra Bank",
    period: "Mar – Aug 2024",
    description:
      "Wrote SQL queries against the core banking database to analyze 10,000+ daily transactions for accuracy and compliance. Automated data-validation workflows with Python (~40% time saved). Built trend dashboards for branch leadership and translated compliance rules into reusable reporting logic.",
  },
  {
    role: "Research Intern — IoT & 5G/6G Wireless Systems",
    org: "IIT Hyderabad",
    period: "Jul 2021 – Dec 2023",
    description:
      "Built Python and C++ simulation tooling to model data transmission, latency, and throughput on next-generation wireless networks. Processed and visualized multi-GB datasets; applied concurrency, MQTT, and high-throughput data handling to event-driven architectures.",
  },
  {
    role: "B.Tech Electronics & Communication Engineering",
    org: "JNTU Hyderabad",
    period: "2020 – 2024",
    description:
      "GPA 8.3/10 · Hyderabad, India. Engineering foundation in systems thinking, wireless communications, and technical problem-solving.",
  },
  {
    role: "Certifications & Learning",
    org: "AWS · Azure · AI",
    period: "Ongoing",
    description:
      "Completed: AWS Academy Cloud Foundations, Python Programming (V Cube), Excellence in IoT Workshop (IIT Hyderabad), Anthropic Claude 101, AI Fluency. In progress: Microsoft Azure Fundamentals (AZ-900), Azure Developer Associate (AZ-204).",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timeline.map((entry) => (
            <div className="career-info-box" key={`${entry.org}-${entry.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.org}</h5>
                </div>
                <h3>{entry.period}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
