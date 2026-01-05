import PageWrapper from "../components/PageWrapper";
import "./About.css";

const About = () => {
  return (
    <PageWrapper>
      <div className="intro intro-anim">
        <p>
          Welcome to my cozy nook in the internet! I am a 3rd-year Computer
          Science student at Northeastern University with a passion for building
          & innovation, design, fashion, cooking and travelling!
        </p>
      </div>
      <div className="columns-wrapper">
        <div className="column fade-up">
          <p>
            I'm enthralled by blending the formulaic and technological aspect of
            software with the contemporary design and care put into presenting
            it; searching for balance between ingenuity and creativity. As a
            child, I was inseparably infatuated with technology. Over the years,
            my passion hasn't died down but I've come to realize that doesn't
            suffice alone. I actively broaden my horizons in fields such as
            literature, fine art, film, cuisine, and philosophy; inherently
            non-technical areas so I can achieve balance akin to "music being
            the space between the notes". I try to draw inspiration from my
            surroundings and my aforementioned interests to create inspired work
            with purpose and meaning.
          </p>

          <img className="about-img" src="/about_pics/1.png" />
        </div>

        <div className="column fade-down">
          <img className="about-img " src="/about_pics/2.png" />
          <p>
            Contrary to my current path, hardware was actually what pushed me
            into the rabbit hole. I remember feeling like Inspector Gadget the
            first time I held a RAM stick and looked at it with a magnifying
            glass as if I had any clue what was going on internally. That
            inquisitiveness grew to assembling desktops for myself and my
            friends and even working for the IT support of a relative's
            business. It was during highschool when I started programming and
            fell in love with the power at my fingertips; anything in my
            imagination was within reach. From basic Java math to web
            development, I've let my imagination soar.
          </p>
        </div>

        <div className="column fade-up">
          <p>
            I want to take my skills to the next level, focusing on a hollistic
            approach to the conception, design, and implementation of scalable
            platforms that are both aesthetically pleasing and functionally
            robust. My work is the imprint I leave on the world, so I want to be
            sure it's pretty to look at. Thank you for reading my little rant :]
          </p>

          <img className="about-img" src="/about_pics/3.png" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
