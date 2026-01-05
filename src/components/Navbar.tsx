import NavigationButton from "./NavigationButton";
import ContactIcon from "../icons/ContactIcon";
import ExperienceIcon from "../icons/ExperienceIcon";
import FolderIcon from "../icons/FolderIcon";
import ProjectsIcon from "../icons/ProjectsIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavigationButton to="/about" title="about me" icon={<FolderIcon />} />
      <NavigationButton
        to="/projects"
        title="projects"
        icon={<ProjectsIcon />}
      />
      <NavigationButton
        to="/experience"
        title="experience"
        icon={<ExperienceIcon />}
      />
      <NavigationButton to="/contact" title="contact" icon={<ContactIcon />} />
    </div>
  );
};

export default Navbar;
