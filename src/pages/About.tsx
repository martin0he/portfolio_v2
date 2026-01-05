import PageWrapper from "../components/PageWrapper";
import "./About.css";

const About = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <PageWrapper>
      <div className="intro intro-anim">
        <p>
          {lorem} {lorem} {lorem} {lorem} {lorem}
        </p>
      </div>
      <div className="columns-wrapper">
        <div className="column fade-up">
          <p>{lorem}</p>
          <p>{lorem}</p>
          <img className="about-img" src="/about_pics/1.png" />
        </div>

        <div className="column fade-down">
          <img className="about-img " src="/about_pics/2.png" />
          <p>{lorem}</p>
          <p>{lorem}</p>
        </div>

        <div className="column fade-up">
          <p>{lorem}</p>
          <p>{lorem}</p>
          <img className="about-img" src="/about_pics/3.png" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
