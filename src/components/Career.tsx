import "./styles/Career.css";

const timeline = [
  {
    role: "M.S. in Information Systems",
    org: "Central Michigan University",
    period: "Aug 2024 – May 2026",
    description:
      "Completed · Mt. Pleasant, MI. Coursework and focus areas: Database Management, Enterprise Application Development, Web Programming, Data Analytics, and Information Security.",
  },
  {
    role: "Operations Analyst — Data, SQL & Reporting",
    org: "Kotak Mahindra Bank",
    period: "Mar – Aug 2024",
    description:
      "Built complex SQL (CTEs, window functions, views, indexing) against a core banking database to validate 10,000+ daily transactions. Automated reconciliation with Python/Pandas (~40% less manual effort; 3-hour process → 20 minutes). Dashboards, anomaly detection, audit-ready reporting, and 15+ reusable SQL templates for Compliance, Audit, and Operations.",
  },
  {
    role: "Research Intern — IoT & 5G/6G Wireless Systems",
    org: "IIT Hyderabad",
    period: "Jul 2021 – Dec 2023",
    description:
      "Architected the lab’s primary Python/C++ wireless simulation platform used across a 2.5-year research program. Ran 300+ experiments on multi-GB datasets, cut simulation runtime ~35% via performance work, and built MQTT IoT aggregation with sub-50 ms latency under lab testing.",
  },
  {
    role: "B.Tech Electronics & Communication Engineering",
    org: "JNTU Hyderabad",
    period: "Jul 2020 – Jun 2024",
    description:
      "Hyderabad, India. Engineering foundation in systems thinking, wireless communications, and technical problem-solving.",
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
