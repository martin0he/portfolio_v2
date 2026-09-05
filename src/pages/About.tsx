import PageWrapper from "../components/PageWrapper";
import "./About.css";

const About = () => {
  return (
    <PageWrapper>
      <article className="about">
        <header
          className="about-lead reveal"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="about-headline">
            Welcome to my cozy nook of the internet.
          </h1>
          <p className="about-standfirst">
            I'm a fourth-year Computer Science student at Northeastern with a
            passion for building &amp; innovation, design, cooking, and
            travelling.
          </p>
        </header>

        <hr className="about-rule reveal" style={{ animationDelay: "0.4s" }} />

        <p className="about-para reveal" style={{ animationDelay: "0.5s" }}>
          I'm enthralled by the space between the formulaic and the contemporary
          — the engineering of software and the care put into presenting it. As
          a child I was inseparably infatuated with technology, and while that
          hasn't died down, I've come to realize it doesn't suffice alone. So I
          read, cook, watch film, and wander through fine art and philosophy,
          looking for a balance akin to{" "}
          <em>music being the space between the notes</em>.
        </p>

        <figure
          className="about-figure figure-right reveal"
          style={{ animationDelay: "0.6s" }}
        >
          <img className="about-img" src="/about_pics/1.webp" alt="" />
        </figure>

        <p className="about-para reveal" style={{ animationDelay: "0.7s" }}>
          Hardware is what pushed me down the rabbit hole. I remember feeling
          like Inspector Gadget the first time I held a RAM stick under a
          magnifying glass, without the faintest clue what was happening inside
          it. That turned into building desktops for friends, then IT support at
          a relative's business, and finally — in high school — programming, and
          the realization that anything in my imagination was within reach.
        </p>

        <figure
          className="about-figure figure-left reveal"
          style={{ animationDelay: "0.8s" }}
        >
          <img className="about-img" src="/about_pics/2.webp" alt="" />
        </figure>

        <p className="about-para reveal" style={{ animationDelay: "0.9s" }}>
          These days I'm after a holistic approach: the conception, design, and
          implementation of platforms that are both aesthetically pleasing and
          functionally robust. My work is the imprint I leave on the world, so
          I'd like it to be pretty to look at.
        </p>

        <figure
          className="about-figure figure-right reveal"
          style={{ animationDelay: "1s" }}
        >
          <img className="about-img" src="/about_pics/3.webp" alt="" />
        </figure>

        <dl className="about-facts reveal" style={{ animationDelay: "1.1s" }}>
          <div className="about-fact">
            <dt>Currently</dt>
            <dd>
              B.S. Computer Science, Northeastern University — class of '27
            </dd>
          </div>
          <div className="about-fact">
            <dt>Off the clock</dt>
            <dd>
              Cinema, cooking, jazz, hostel travel, literature, basketball,
              comics
            </dd>
          </div>
          <div className="about-fact">
            <dt>Languages</dt>
            <dd>English, Albanian, Greek, French</dd>
          </div>
        </dl>

        <p className="about-signoff reveal" style={{ animationDelay: "1.2s" }}>
          Thanks for reading my little rant :]
        </p>
      </article>
    </PageWrapper>
  );
};

export default About;
