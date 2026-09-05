import PageWrapper from "../components/PageWrapper";
import "./Experience.css";

type WorkExperience = {
  company: string;
  role: string;
  location: string;
  points: string[];
  company_url?: string;
  start_date: Date;
  end_date?: Date;
};

const workHistory: WorkExperience[] = [
  {
    company: "DraftKings",
    role: "Software Engineering Co-op",
    location: "Boston, MA",
    company_url: "https://casino.draftkings.com",
    points: [
      "Building the frontend for a real-time bitcoin prediction game in SolidJS, drawing the price canvas in PixiJS and keeping it in step with a WebSocket tick feed that can't drop or reorder.",
      "Writing the technical spec for a redesigned game info drawer shipping to two casino brands — service contracts, loading boundaries, the experiment gating it sits behind, and the conditions under which we roll it back.",
      "Working with backend, product, and design to sequence the milestones, prototype the drawer's search flow, and move the remaining legacy components onto the current design system.",
    ],
    start_date: new Date(2026, 6),
  },
  {
    company: "DraftKings",
    role: "Software Engineering Co-op",
    location: "Boston, MA",
    company_url: "https://casino.draftkings.com",
    points: [
      "Built the frontend for a new live blackjack experience on the casino platform, using React and Jotai to hold game state and keep re-renders down during play.",
      "Wrote the architecture proposal behind it, which meant working out how the existing launch path actually functioned and designing data flows that let new games launch without bespoke backend work each time.",
      "Coordinated the release across backend, product, and QA — breaking the work into tickets, clearing blockers, and running the regression cycle before it went out.",
    ],
    start_date: new Date(2025, 6),
    end_date: new Date(2025, 11),
  },
  {
    company: "Kappa Theta Pi National",
    role: "App Lead",
    location: "Remote",
    company_url: "https://kappathetapi.org",
    points: [
      "Leading the mobile app and admin dashboard that 30+ chapters use to run recruitment, events, and day-to-day operations.",
      "Setting the architecture and review standards for a distributed group of chapter developers, and handling releases to the App Store and Play Store.",
    ],
    start_date: new Date(2025, 11),
  },
  {
    company: "Kappa Theta Pi, Omega Chapter",
    role: "Founder & Co-President",
    location: "Boston, MA",
    company_url: "https://ktpneu.org",
    points: [
      "Started Northeastern's first professional technology fraternity and grew it to 65+ members.",
      "Ran recruitment across three consecutive cycles, over which applicant interest rose 40%.",
      "Handled operations and the budget behind 20+ workshops, hackathons, and corporate networking events.",
    ],
    start_date: new Date(2024, 4),
    end_date: new Date(2025, 11),
  },
  {
    company: "Sandbox at Northeastern",
    role: "Software Developer",
    location: "Boston, MA",
    company_url: "https://www.sandboxnu.com/",
    points: [
      "Built the interactive schedule builder for SearchNEU, the course platform Northeastern students plan registration on.",
      "Wrote the constraint filters behind it — campus, open seats, free days — and the layout that arranges a generated schedule onto a week.",
    ],
    start_date: new Date(2026, 0),
    end_date: new Date(2026, 3),
  },
  {
    company: "Khoury College of Computer Sciences",
    role: "Frontend Developer",
    location: "Boston, MA",
    company_url: "https://www.khouryodyssey.org/",
    points: [
      "Rebuilt parts of the frontend for Odyssey, Khoury's personalized learning platform.",
    ],
    start_date: new Date(2024, 10),
    end_date: new Date(2024, 11),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Software Tech Lead",
    location: "Boston, MA",
    company_url: "https://finishlinebyner.com/",
    points: [
      "Led an eleven-person team on the project management dashboard that around 200 engineers use to build the team's cars.",
      "Ran sprints and ticket review, and kept feature work lined up with the car's build milestones.",
      "Brought new developers up to speed on the codebase — its React component patterns and Express API conventions.",
    ],
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 9),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Product Designer",
    location: "Boston, MA",
    company_url: "https://finishlinebyner.com/",
    points: [
      "Designed dashboard features with engineering and operations, turning the way the team already worked into interfaces they would keep using.",
    ],
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 3),
  },
  {
    company: "Knack",
    role: "Peer Tutor",
    location: "Remote",
    points: [
      "Tutored other students in foundational mathematics and computer science coursework.",
    ],
    start_date: new Date(2024, 0),
    end_date: new Date(2024, 3),
  },
  {
    company: "Northeastern Electric Racing",
    role: "Software Developer",
    location: "Boston, MA",
    company_url: "https://finishlinebyner.com/",
    points: [
      "Built features for the project management dashboard the team designs and builds its electric race cars on.",
    ],
    start_date: new Date(2023, 8),
    end_date: new Date(2023, 11),
  },
];

const ONGOING = Number.MAX_SAFE_INTEGER;

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
}) => (
  <li
    className="timeline-item"
    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
  >
    <span className="timeline-dot" aria-hidden="true" />
    <article className="experience-card">
      <header className="experience-card-header">
        <h3 className="experience-card-role">{workExperience.role}</h3>
        <span className="experience-card-dates">
          {getDateRange(workExperience.start_date, workExperience.end_date)}
        </span>
      </header>

      <p className="experience-card-meta">
        {workExperience.company_url ? (
          <a
            className="company"
            href={workExperience.company_url}
            target="_blank"
            rel="noreferrer"
          >
            {workExperience.company}
          </a>
        ) : (
          <span className="company">{workExperience.company}</span>
        )}
        <span className="meta-divider" aria-hidden="true" />
        <span className="experience-card-location">
          {workExperience.location}
        </span>
      </p>

      <ul className="bullet-points">
        {workExperience.points.map((point) => (
          <li key={point} className="bullet-point">
            {point}
          </li>
        ))}
      </ul>
    </article>
  </li>
);

const Experience = () => {
  // Most recent first; ongoing roles sort to the top, newest start first.
  const sortedWorkHistory = [...workHistory].sort((a, b) => {
    const aEnd = a.end_date ? a.end_date.getTime() : ONGOING;
    const bEnd = b.end_date ? b.end_date.getTime() : ONGOING;
    if (aEnd !== bEnd) return bEnd - aEnd;
    return b.start_date.getTime() - a.start_date.getTime();
  });

  return (
    <PageWrapper>
      <ul className="timeline-container">
        {sortedWorkHistory.map((workExperience, index) => (
          <ExperienceCard
            workExperience={workExperience}
            key={`${workExperience.company}-${workExperience.role}-${workExperience.start_date.getTime()}`}
            index={index}
          />
        ))}
      </ul>
    </PageWrapper>
  );
};

export default Experience;
