import PageWrapper from "../components/PageWrapper";
import "./Experience.css";

type WorkExperience = {
  company: string;
  role: string;
  location: string;
  description: string;
  company_url: string;
  start_date: Date;
  end_date?: Date;
};

const workHistory: WorkExperience[] = [
  {
    company: "DraftKings Inc.",
    role: "Software Engineering Co-op",
    description:
      "Contributing to the development and maintenance of web applications for DraftKings' online casino platform, focusing on frontend features and user experience enhancements.",
    company_url: "casino.draftkings.com",
    location: "Boston, MA",
    start_date: new Date(2025, 5),
    end_date: new Date(2025, 11),
  },
  {
    company: "Kappa Theta Pi National Chapter",
    role: "App Lead",
    location: "Remote",
    description:
      "Coordinating the development of a multi-tenant mobile application to streamline fraternity operations, recruitment, member engagement.",

    company_url: "kappathetapi.org",
    start_date: new Date(2025, 11),
  },
  {
    company: "Kappa Theta Pi Omega Chapter",
    role: "Founder & Co-President",
    location: "Boston, MA",
    description:
      "Created the first professional co-ed technology fraternity at Northeastern University.",

    company_url: "ktpneu.org",
    start_date: new Date(2024, 4),
    end_date: new Date(2025, 11),
  },
  {
    company: "Khoury College of Computer Sciences",
    role: "Frontend Developer",
    location: "Boston, MA",
    description:
      "Worked on redesigning and implementing Khoury's new personalized learning management platform, Odyssey.",

    company_url: "https://www.khouryodyssey.org/",
    start_date: new Date(2024, 10),
    end_date: new Date(2024, 11),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Technical Lead",

    location: "Boston, MA",
    description:
      "Lead a team of developers to rollout features and optimization of the project management dashboard in coordination with other leadership.",
    company_url: "https://finishlinebyner.com/",
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 9),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Product Designer",
    location: "Boston, MA",
    description:
      "Design features with engineers' and operations' input for our custom project managament dashboard.",
    company_url: "https://finishlinebyner.com/",
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 3),
  },
  {
    company: "Knack",
    role: "Peer Tutor",
    location: "Remote",
    description:
      "Part-time peer tutor supporting fellow students in fundamental Mathematics and CS classes.",
    company_url: "",
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 3),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Software Developer",
    location: "Boston, MA",
    description:
      "Develop a project management dashboard for the design and construction of electric race cars.",
    company_url: "https://finishlinebyner.com/",
    start_date: new Date(2023, 8),
    end_date: new Date(2023, 11),
  },
];

const formatDate = (date: Date) =>
  date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

const getDateRange = (startDate: Date, endDate?: Date) =>
  `${formatDate(startDate)} — ${endDate ? formatDate(endDate) : "Present"}`;

const ExperienceCard = ({
  workExperience,
  index,
}: {
  workExperience: WorkExperience;
  index: number;
}) => {
  const bulletPoints = workExperience.description
    .split(". ")
    .filter((point) => point.trim().length > 0);

  return (
    <div
      className="timeline-item"
      style={{ animationDelay: `${0.3 * (index + 1)}s` }}
    >
      <div className="timeline-dot"></div>
      <div className="experience-card">
        <div className="experience-card-header">
          <h3 className="experience-card-title">
            {workExperience.role} @{" "}
            <span className="company">{workExperience.company}</span>
          </h3>
          <span className="experience-card-dates">
            {getDateRange(workExperience.start_date, workExperience.end_date)}
          </span>
        </div>
        <h4 className="experience-card-location">{workExperience.location}</h4>
        <div className="bullet-points">
          {bulletPoints.map((point, i) => (
            <h3 key={i} className="bullet-point">
              <span className="bullet-point-symbol">➡</span> {point}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  // sort work experiences by end_date descending if end_date is undefined, treat it as the most recent
  const sortedWorkHistory = workHistory.sort((a, b) => {
    const aEnd = a.end_date ? a.end_date.getTime() : Infinity;
    const bEnd = b.end_date ? b.end_date.getTime() : Infinity;
    return bEnd - aEnd;
  });

  return (
    <PageWrapper>
      <div className="timeline-container">
        {sortedWorkHistory.map((workExperience, index) => (
          <ExperienceCard
            workExperience={workExperience}
            key={index}
            index={index}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Experience;
