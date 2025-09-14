import { Box } from "@mui/material";

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
      width="30%"
      height="100%"
    >
      <Box
        sx={{
          flex: "0 0 35%",
          maxHeight: "35%",
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
        {children}
      </Box>
    </Box>
  );
};

export default AboutMeSection;
