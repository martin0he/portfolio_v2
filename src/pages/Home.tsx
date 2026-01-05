import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import ModelViewer from "../ModelViewer";

const Home = () => {
  return (
    <>
      <h2>hi, i'm martin.</h2>
      <ModelViewer modelUrl="/martin_3d_model.glb" />
      <div className="social-links-home">
        <a target="_blank" href="https://www.linkedin.com/in/martin-hema/">
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://www.github.com/martin0he">
          <GithubIcon />
        </a>
      </div>
    </>
  );
};

export default Home;
