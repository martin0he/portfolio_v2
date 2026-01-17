import "./TechStack.css";

const techStack = {
  React: "react.png",
  TypeScript: "tsx.png",
  Express: "node.svg",
  "C++": "cpp.png",
  Python: "py.png",
  CSS: "css.png",
  Datadog: "dd.webp",
  Docker: "docker.png",
  "React Native": "expo.svg",
  "Next.js": "next.png",
  TailwindCSS: "tailwind.svg",
  Supabase: "supabase.webp",
  "New Relic": "newrelic.png",
};

const TechStack = () => {
  const techNames = Object.keys(techStack) as Array<keyof typeof techStack>;
  const duplicatedTechs = [...techNames, ...techNames];

  return (
    <div className="tech-stack-section">
      <div className="tech-conveyor">
        <div className="tech-track">
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech}-${index}`} className="tech-icon-item">
              <img
                src={`/tech_stack_icons/${techStack[tech]}`}
                alt={tech}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
