import { Box, Typography } from "@mui/material";
import { Theme } from "../theme";

interface PageLayoutProps {
  pageHeader: string;
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      paddingX={8}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      sx={{ scrollSnapAlign: "start" }}
    >
      <Typography
        fontSize={{ lg: 75, md: 65, sm: 55, xs: 45 }}
        fontFamily={"Afacad, sans-serif"}
        fontWeight={400}
        color={Theme.colors.darkMode.COMMENTS}
        marginTop={6}
      >
        {props.pageHeader}
      </Typography>
      <Box
        marginTop={1}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default PageLayout;
