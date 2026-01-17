import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import ModelViewer from "../components/ModelViewer";
import ResumeIcon from "../icons/ResumeIcon";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* TODO: add custom tooltip only when hovering, NOT clicking */}
      <ModelViewer modelUrl="/martin_3d_model.glb" />
      <div className="bottom-bar">
        <h1>hi, i'm martin</h1>
        <div className="social-links-home">
          <a
            className="linkedin-button"
            target="_blank"
            href="https://www.linkedin.com/in/martin-hema/"
          >
            <LinkedInIcon />
          </a>
          <a
            className="github-button"
            target="_blank"
            href="https://www.github.com/martin0he"
          >
            <GithubIcon />
          </a>
          <a
            className="resume-button"
            target="_blank"
            href="/Martin Hema Resume.pdf"
          >
            <ResumeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
