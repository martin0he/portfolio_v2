import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import PageTab from "./PageTab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Theme } from "../../theme";
import Topbar from "./Topbar";

interface NavbarProps {
  items: { id: string; label: string }[];
}

const Accordions = ({ items }: NavbarProps) => {
  return (
    <Accordion
      disableGutters
      defaultExpanded
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <AccordionSummary
        sx={{
          padding: "0px 10px",
          margin: 0,
          minHeight: "fit-content",
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: Theme.colors.darkMode.WHITE,
              fontSize: { lg: 26, md: 24, sm: 22, xs: 19 },
            }}
          />
        }
      >
        <Typography
          fontFamily={"Afacad, sans-serif"}
          fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
          color={Theme.colors.darkMode.WHITE}
          padding={"0px"}
          paddingLeft={"5px"}
          margin={"0px"}
          fontWeight={600}
        >
          PORTFOLIO
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ paddingTop: "2px", padding: "0px" }}>
        <Accordion
          defaultExpanded
          disableGutters
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <AccordionSummary
            sx={{
              padding: "0px 10px",
              margin: 0,
              minHeight: "fit-content",
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: Theme.colors.darkMode.WHITE,
                  fontSize: { lg: 26, md: 24, sm: 22, xs: 19 },
                }}
              />
            }
          >
            <Typography
              fontFamily={"Afacad, sans-serif"}
              fontSize={{ lg: 20, md: 18, sm: 16, xs: 15 }}
              color={Theme.colors.darkMode.WHITE}
              paddingLeft={"20px"}
            >
              pages
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ paddingTop: "12px", padding: "0px" }}>
            {items.map((it) => (
              <PageTab key={it.id} id={it.id} title={it.label} />
            ))}
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};

const Navbar = ({ items }: NavbarProps) => {
  return (
    <Box
      width={{ xs: "100%", md: "20vw" }}
      height={{ xs: "auto", md: "100vh" }}
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        backgroundColor: Theme.colors.darkMode.TASKBAR_BG,
      }}
    >
      <Topbar onIconClick={() => {}} />
      <Accordions items={items} />
    </Box>
  );
};

export default Navbar;
