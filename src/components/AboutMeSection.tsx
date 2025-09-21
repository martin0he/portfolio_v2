import { Box, Typography } from "@mui/material";
import { Theme } from "../theme";

interface AboutMeSectionProps {
  variant?: "1" | "2";
  imgUrl: string;
  children: React.ReactNode;
}

const AboutMeSection = ({
  variant = "1",
  imgUrl,
  children,
}: AboutMeSectionProps) => {
  return (
    <Box
      display="flex"
      flexDirection={variant === "1" ? "column" : "column-reverse"}
      alignItems="center"
      justifyContent="center"
      width="27%"
      height="100%"
    >
      <Box
        sx={{
          flex: `0 0 ${variant === "2" ? "60%" : "30%"}`,
          maxHeight: variant === "2" ? "60%" : "30%",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src={imgUrl}
          alt="About me image"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: "1 1 auto",
          width: "100%",
          overflow: "auto",
          mt: variant === "1" ? 2 : 0,
          mb: variant === "2" ? 2 : 0,
        }}
      >
        <Typography
          fontFamily={"Afacad, sans-serif"}
          fontSize={18}
          color={Theme.colors.darkMode.WHITE}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMeSection;
