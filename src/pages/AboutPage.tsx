import { Typography } from "@mui/material";
import AboutMeSection from "../components/AboutMeSection";
import PageLayout from "../components/PageLayout";
import { Theme } from "../theme";

const AboutPage = () => {
  return (
    <PageLayout pageHeader="More About Me">
      <AboutMeSection imgUrl="https://picsum.photos/200/300">
        <Typography
          fontFamily={"Afacad, sans-serif"}
          fontSize={18}
          color={Theme.colors.darkMode.WHITE}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan nisl sit amet libero maximus, non sodales magna pretium. Duis
          ac erat nisl. Phasellus egestas enim quis dolor egestas efficitur.
          Vestibulum lobortis vulputate turpis eu pharetra. Quisque consectetur
          tempus mi, accumsan semper sapien finibus eget. Curabitur erat turpis,
          iaculis vel ex ac, aliquet vehicula purus. Praesent in blandit lorem.
        </Typography>
      </AboutMeSection>
    </PageLayout>
  );
};

export default AboutPage;
