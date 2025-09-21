import { Box } from "@mui/material";
import AboutMeSection from "../components/AboutMeSection";
import PageLayout from "../components/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout pageHeader="More About Me">
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"row"}
        columnGap={6}
        height={"80%"}
      >
        <AboutMeSection imgUrl="https://picsum.photos/200/300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan nisl sit amet libero maximus, non sodales magna pretium. Duis
          ac erat nisl. Phasellus egestas enim quis dolor egestas efficitur.
          Vestibulum lobortis vulputate turpis eu pharetra. Quisque consectetur
          tempus mi, accumsan semper sapien finibus eget. Curabitur erat turpis,
          iaculis vel ex ac, aliquet vehicula purus. Praesent in blandit lorem.
        </AboutMeSection>
        <AboutMeSection imgUrl="https://picsum.photos/200/301" variant="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan nisl sit amet libero maximus, non sodales magna pretium. Duis
          ac erat nisl. Phasellus egestas enim quis dolor egestas efficitur.
          Vestibulum lobortis vulputate turpis eu pharetra. Quisque consectetur
          tempus mi, accumsan semper sapien finibus eget. Curabitur erat turpis,
          iaculis vel ex ac, aliquet vehicula purus. Praesent in blandit lorem.
        </AboutMeSection>
        <AboutMeSection imgUrl="https://picsum.photos/200/301">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan nisl sit amet libero maximus, non sodales magna pretium. Duis
          ac erat nisl. Phasellus egestas enim quis dolor egestas efficitur.
          Vestibulum lobortis vulputate turpis eu pharetra. Quisque consectetur
          tempus mi, accumsan semper sapien finibus eget. Curabitur erat turpis,
          iaculis vel ex ac, aliquet vehicula purus. Praesent in blandit lorem.
        </AboutMeSection>
      </Box>
    </PageLayout>
  );
};

export default AboutPage;
