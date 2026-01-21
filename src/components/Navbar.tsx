import NavigationButton from "./NavigationButton";
import ExperienceIcon from "../icons/ExperienceIcon";
import FolderIcon from "../icons/FolderIcon";
import ProjectsIcon from "../icons/ProjectsIcon";
import Links from "./Links";
import HomeIcon from "../icons/HomeIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavigationButton to="/" title="home" icon={<HomeIcon />} />

      <NavigationButton to="/about" title="about me" icon={<FolderIcon />} />
      <NavigationButton
        to="/experience"
        title="experience"
        icon={<ExperienceIcon />}
      />
      <NavigationButton
        to="/projects"
        title="projects"
        icon={<ProjectsIcon />}
      />
      <Links />
    </div>
  );
};

export default Navbar;
