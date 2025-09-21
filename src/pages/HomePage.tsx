import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import Typewriter from "typewriter-effect";
import { Theme } from "../theme";
import AsciiHead from "../components/AsciiHead";

const HomePage = () => {
  return (
    <PageLayout pageHeader="Hiya, I'm Martin!">
      <Typography
        fontFamily={"Afacad, sans-serif"}
        fontSize={{ lg: 50, md: 40, sm: 30, xs: 20 }}
        color={Theme.colors.darkMode.COMMENTS}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        columnGap={{ lg: "12px", md: "12px", sm: "8px", xs: "6px" }}
      >
        I'm a
        <span style={{ color: Theme.colors.darkMode.BLUE }}>
          <Typewriter
            options={{
              strings: [
                "full-stack engineer.",
                "passionate foodie.",
                "corny cinephile.",
                "lifelong traveler.",
                "continuous learner.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
              delay: 80,
            }}
          />
        </span>
      </Typography>
      <AsciiHead />
    </PageLayout>
  );
};

export default HomePage;
