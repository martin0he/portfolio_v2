import { Box, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Theme } from "../../theme";

interface PageTabProps {
  id: string;
  title: string;
  offset?: number;
}

const PageTab = ({ id, title, offset = 0 }: PageTabProps) => {
  return (
    <ScrollLink
      to={id}
      containerId="sectionsContainer"
      spy
      smooth
      duration={0}
      offset={offset}
      hashSpy
      activeClass="active"
      activeStyle={{ backgroundColor: "#3C3D39" }}
      style={{
        backgroundColor: "transparent",
        display: "flex",
        width: "100%",
        cursor: "pointer",
        textDecoration: "none",
        alignItems: "center",
        userSelect: "none",
        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <Box
        paddingLeft={"40px"}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={"flex-start"}
        gap="8px"
        paddingY={"3px"}
      >
        <Box
          component="img"
          sx={{
            width: { lg: 18, md: 21, sm: 18, xs: 17 },
            height: "auto",
          }}
          alt=""
          src="src/assets/react.svg"
        />
        <Typography
          variant="body1"
          fontFamily={"Afacad, sans-serif"}
          fontSize={{ lg: 18, md: 16, sm: 14, xs: 13 }}
          color={Theme.colors.darkMode.WHITE}
        >
          {title.toLowerCase() + "_page.tsx"}
        </Typography>
      </Box>
    </ScrollLink>
  );
};

export default PageTab;
