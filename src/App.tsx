import { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import { Element, scroller, scrollSpy } from "react-scroll";
import Navbar from "./components/nav/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";

const Sections = ({ children }: { children: React.ReactNode }) => (
  <Box
    id="sectionsContainer"
    width={{ xs: "100vw", sm: "100vw", md: "80vw" }}
    height="100vh"
    sx={{
      overflowY: "scroll",
      overflowX: "hidden",
      scrollSnapType: "y proximity",
      scrollBehavior: "smooth",

      scrollbarWidth: "none",
      "& > *": {
        minHeight: "100vh",
        scrollSnapAlign: "start",
      },
    }}
  >
    {children}
  </Box>
);

export default function App() {
  const sections = useMemo(
    () => [
      { id: "home", node: <HomePage /> },
      { id: "about", node: <AboutPage /> },
      { id: "experience", node: <ExperiencePage /> },
    ],
    []
  );

  useEffect(() => {
    scrollSpy.update();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scroller.scrollTo(hash, {
        containerId: "sectionsContainer",
        smooth: true,
        duration: 200,
        offset: 0,
      });
    }
  }, []);

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Sections>
        {sections.map((s) => (
          <Element
            style={{ marginBottom: "20px" }}
            name={s.id}
            id={s.id}
            key={s.id}
          >
            {s.node}
          </Element>
        ))}
      </Sections>

      <Navbar items={sections.map((s) => ({ id: s.id, label: s.id }))} />
    </Box>
  );
}
