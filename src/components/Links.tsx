import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import ResumeIcon from "../icons/ResumeIcon";

const Links = () => {
  return (
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
      <a className="email-button" href="mailto:martin.hema.mh@gmail.com">
        <EmailIcon />
      </a>
    </div>
  );
};

export default Links;
