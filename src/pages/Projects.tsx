import PageWrapper from "../components/PageWrapper";
import "./Projects.css";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  size?: "small" | "medium" | "large";
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  size = "medium",
}: ProjectProps) => {
  return (
    <div className={`project-card ${size}`}>
      <div className="card-image-wrapper">
        <video muted controls src={image} />
      </div>
      <div className="card-content">
        <div className="tech-stack">
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Kappa Theta Pi National App",
    tags: ["TypeScript", "React Native", "Nativewind", "Supabase", "Expo"],
    size: "large",
    image: "/path-to-gif1.gif",
    description:
      "National mobile app for cross-chapter social networking, multitenancy chapter management, finanical dues processing, roster management and all other features available in the Omega predecessor.",
  },
  {
    title: "Portfolio",
    tags: ["React", "Three.js", "TypeScript", "CSS"],
    size: "small",
    image: "/path-to-gif1.gif",
    description:
      "New personal portfolio website to showcase my sparkle and whimsy.",
  },
  {
    title: "Kappa Theta Pi Ω App",
    tags: ["TypeScript", "React Native", "Nativewind", "Supabase", "Expo"],
    size: "medium",
    image: "/path-to-gif1.gif",
    description:
      "In-house all-in-one mobile app for recruitment, event management, attendance tracking, social networking, and chapter-wide updates.",
  },
  {
    title: "Cookable",
    tags: [
      "TypeScript",
      "React",
      "MUI",
      "Docker",
      "PostgreSQL",
      "NodeJS",
      "Express",
      "REST API",
      "bcrypt",
      "JWT",
    ],
    size: "medium",
    image: "/projects/cookable.webm",
    description:
      "Full-stack social media platform to author, self-publish, share, and discover cookbooks and recipes.",
  },
  {
    title: "AudioAnalytica",
    tags: [
      "TypeScript",
      "React",
      "MUI",
      "NodeJS",
      "Express",
      "Spotify Web API",
      "Python",
      "TensorFlow",
    ],
    size: "small",
    image: "/projects/audio-analytica.webm",
    description:
      "Spotify statistics & neural net analysis website for your top tracks, artists, genres, and audio features.",
  },
  {
    title: "CollegeRanks",
    tags: ["TypeScript", "React", "MUI", "Chart.js", "Supabase"],
    size: "large",
    image: "/projects/college-ranks.webm",
    description:
      "Global university ranking website with a custom weighted scale, provided metrics, and user-submitted reviews.",
  },
  {
    title: "theMarketplace",
    tags: ["TypeScript", "React", "NodeJS", "Supabase", "Mapbox API", "MUI"],
    size: "medium",
    image: "/projects/marketplace.webm",
    description:
      "University-based online marketplace to sell and buy used items on campus for all schools worldwide. Uses academic '.edu' email for registration.",
  },
  {
    title: "Finishline",
    tags: ["React", "TypeScript", "NodeJS", "Express", "Prisma", "Docker"],
    size: "medium",
    image: "/projects/finishline.webm",
    description:
      "Contributed to the project management dashboard website for the team at Northeastern Electric Racing developing electric cars.",
  },
];

const ProjectGrid = () => {
  return (
    <div className="mosaic-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} size={project.size as any} />
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <ProjectGrid />
    </PageWrapper>
  );
};

export default Projects;
