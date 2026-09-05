import { useEffect, useRef, useState } from "react";

import PageWrapper from "../components/PageWrapper";
import TechStack from "../components/TechStack";
import "./Projects.css";

type ProjectSize = "small" | "medium" | "large";

type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  size?: ProjectSize;
};

// The demo clips total tens of megabytes. Autoplaying them all on mount made the
// browser fetch every one at once, so a card only gets a src once it is close to
// the viewport — by which point it plays exactly as before.
const useNearViewport = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  // Browsers without IntersectionObserver just load every clip, as before.
  const [isNear, setIsNear] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || isNear) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsNear(true);
      },
      { rootMargin: "400px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isNear]);

  return { ref, isNear };
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  size = "medium",
}: ProjectProps) => {
  const { ref, isNear } = useNearViewport<HTMLDivElement>();

  return (
    <div className={`project-card ${size}`} ref={ref}>
      {image ? (
        <div className="card-image-wrapper">
          <video
            muted
            playsInline
            controls={false}
            autoPlay
            loop
            preload="none"
            src={isNear ? image : undefined}
          />
        </div>
      ) : (
        <div className="card-no-image">Demo Unavailable</div>
      )}
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
    tags: [
      "TypeScript",
      "React Native",
      "Expo",
      "NativeWind",
      "Supabase",
      "TanStack Query",
    ],
    size: "large",

    description:
      "The mobile app 30+ Kappa Theta Pi chapters run on. An event feed, a week calendar with instant RSVPs, QR check-in on codes that rotate so they can't be passed around, and a member directory that works across chapters. One Expo codebase for iOS, Android and web.",
  },
  {
    title: "Kappa Theta Pi E-Board Dashboard",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "Supabase",
      "Recharts",
    ],
    size: "small",
    image: "/projects/ktp-dash.webm",
    description:
      "The admin side of the same platform. Officers edit their roster in a table, read chapter analytics, and set the configuration the member app reads back. Each column is defined in one place, so its editor and its server-side validation can't drift apart.",
  },
  {
    title: "SearchNEU",
    tags: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Turborepo",
    ],
    size: "medium",
    image: "/projects/searchneu.webm",
    description:
      "Northeastern's open-source course search, maintained by Sandbox. I work on the schedule builder: conflict detection, filters for campus, open seats and free days, and enough local state that a plan can be shared or picked back up without an account.",
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

    description:
      "A site for writing your own recipes, collecting them into cookbooks, and publishing them for other people to cook from.",
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
    size: "large",
    image: "/projects/audio-analytica.webm",
    description:
      "Spotify listening stats on demand rather than once a year — top tracks, artists and genres, plus a model that reads the audio features of what you play and characterizes your taste.",
  },
  {
    title: "Finishline",
    tags: ["React", "TypeScript", "NodeJS", "Express", "Prisma", "Docker"],
    size: "small",
    image: "/projects/finishline.webm",
    description:
      "The project management dashboard Northeastern Electric Racing builds its cars on. I worked on it as a developer, then led the team maintaining it.",
  },
  {
    title: "theMarketplace",
    tags: ["TypeScript", "React", "NodeJS", "Supabase", "Mapbox API", "MUI"],
    size: "small",
    image: "/projects/marketplace.webm",
    description:
      "A buy-and-sell marketplace limited to a single campus. Registration goes through a .edu address, so the used desk you're looking at is two buildings away.",
  },
  {
    title: "CollegeRanks",
    tags: ["TypeScript", "React", "MUI", "Chart.js", "Supabase"],
    size: "small",
    image: "/projects/college-ranks.webm",
    description:
      "University rankings you can reweight. Set the metrics to what you care about, watch the ordering change, and read reviews from students who actually attend.",
  },
];

const ProjectGrid = () => {
  return (
    <div className="mosaic-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          size={project.size as ProjectSize}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <TechStack />
      <ProjectGrid />
    </PageWrapper>
  );
};

export default Projects;
